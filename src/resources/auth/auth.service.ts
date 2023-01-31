import { ITokenPayload } from '@common/models/guards';

import {
  ILogin,
  IAuthTokens,
  ICheckVerificationCode,
  ICheckUsername,
  IUsernameExists,
  ICheckEmail,
  IEmailExists,
} from '@common/models/auth';

import { AccessTokenDTO } from '@common/dtos';

import { PasswordSetDTO, RegisterDTO } from './dto';

import { UsersService } from '@resources/user';

import { JwtService, JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt';

import { Injectable, HttpStatus } from '@nestjs/common';

import { isEmpty, omit } from 'lodash';

import * as bcrypt from 'bcrypt';
import { User } from '@common/database/entities';

import { isEmail } from 'class-validator';

import {
  IAws,
  ICheckUserAuth,
  ICheckUserAuthBody,
  IMessageSuccess,
} from '@common/models';

import { buildResponse } from '@common/helpers';
import { ERROR_MESSAGES } from '@common/messages';

import { VerificationCodesService } from '../verification-codes';

import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';

import { AwsS3Service } from '@shared/s3';

import { MediaService } from '@resources/media/media.service';
import { IntegrationsService } from '@resources/integrations/integrations.service';
import { CountriesService } from '@resources/countries/countries.service';

import { Transactional } from 'typeorm-transactional';

@Injectable()
export class AuthService {
  private _awsS3Service: AwsS3Service;

  constructor(
    private readonly _jwtService: JwtService,
    private readonly _usersService: UsersService,
    private readonly _verificationCodesService: VerificationCodesService,
    private readonly _configService: ConfigService,
    private readonly _mediaFilesService: MediaService,
    private readonly _integrationsService: IntegrationsService,
    private readonly _countriesService: CountriesService,
  ) {
    const { bucket } = this._configService.get<IAws>('AWS_CONFIG');
    this._awsS3Service = new AwsS3Service(bucket);
  }

  @Transactional()
  public async checkUserAuth(
    body: ICheckUserAuthBody,
  ): Promise<ICheckUserAuth> {
    const { login } = body;
    const isUserExists = await this._usersService.findByEmailOrPhone(login);
    if (!isUserExists) {
      if (isEmail(login)) {
        throw buildResponse(
          false,
          null,
          ERROR_MESSAGES.USER_WITH_EMAIL_NOT_FOUND,
        );
      } else {
        const customerId = uuid();

        await this._usersService.createCustomer(customerId, login);
        const { code } =
          await this._verificationCodesService.sendSmsAndSaveByCustomerId(
            customerId,
            login,
          );
        const accessToken = await this.createAccessToken(
          {
            customerId,
            isVerified: false,
          },
          false,
        );
        return buildResponse(true, {
          userExists: !!isUserExists,
          accessToken,
          code,
        }) as ICheckUserAuth;
      }
    }
    return buildResponse(true, {
      userExists: !!isUserExists,
    });
  }

  async createAccessToken(
    payload: ITokenPayload,
    isPrimaryToken = true,
  ): Promise<string> {
    const verifyOptions: JwtSignOptions = !isPrimaryToken
      ? {
          secret: this._configService.get('JWT_CONFIG.secret'),
        }
      : {};

    return this._jwtService.sign(payload as object, verifyOptions);
  }

  async createRefreshToken(customerId: string): Promise<string> {
    const refreshToken = uuid();

    return this._jwtService.sign(
      { sub: customerId, jti: refreshToken },
      { expiresIn: this._configService.get('JWT_CONFIG.refreshExpiresIn') },
    );
  }

  async validateAccessToken(
    accessToken: string,
    isPrimaryToken = true,
  ): Promise<ITokenPayload> {
    try {
      const token = accessToken?.replace('Bearer', '')?.trim();
      // Verify the access token and return the decoded payload
      const verifyOptions: JwtVerifyOptions = !isPrimaryToken
        ? {
            secret: this._configService.get('JWT_CONFIG.secret'),
          }
        : {};
      await this._jwtService.verify(token, verifyOptions);
      return this._jwtService.decode(token) as ITokenPayload;
    } catch (error) {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.USER_UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async validateVerifiedAccessToken(
    accessToken: string,
    isPrimaryToken = true,
  ): Promise<ITokenPayload> {
    const user = await this.validateAccessToken(accessToken, isPrimaryToken);
    if (!user.isVerified) {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.USER_FORBIDDEN,
        HttpStatus.FORBIDDEN,
      );
    }
    return user;
  }

  @Transactional()
  async refreshAccessToken(refreshToken: string): Promise<IAuthTokens> {
    refreshToken = refreshToken?.replace('Bearer', '')?.trim();
    // Will throw an exception in case of not valid refresh token
    const { id, customerId } = await this.validateRefreshToken(refreshToken);

    const accessToken = await this.createAccessToken({
      id,
      customerId,
      isVerified: true,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async validateRefreshToken(refreshToken: string): Promise<User> {
    try {
      await this._jwtService.verify(refreshToken);
      const decoded = await this._jwtService.decode(refreshToken);
      // Check if the user associated with the token is still valid and has not been revoked
      const user = await this._usersService.findOne(decoded.sub);
      if (!user) {
        throw buildResponse(
          false,
          null,
          ERROR_MESSAGES.USER_UNAUTHORIZED,
          HttpStatus.UNAUTHORIZED,
        );
      }
      return user;
    } catch (error) {
      throw buildResponse(
        false,
        null,
        error?.response?.message ?? ERROR_MESSAGES.USER_UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async validateUserByPhoneAndPassword(
    login: string,
    password: string,
  ): Promise<User | null> {
    const user = await this._usersService.findByEmailOrPhone(login);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  @Transactional()
  async register(
    body: RegisterDTO,
    userPayload: ITokenPayload,
    avatar: Express.Multer.File,
  ): Promise<IAuthTokens> {
    const { customerId } = userPayload;
    const { username, email, phone, countryId } = body;

    const { phone: customerPhone } =
      await this._usersService.getCustomerByCustomerId(customerId);

    if (customerPhone !== phone) {
      throw buildResponse(false, null, ERROR_MESSAGES.USER_PHONE_NOT_MATCH);
    }

    const findBycustomerId = await this._usersService.findOne({ customerId });

    if (findBycustomerId) {
      throw buildResponse(false, null, ERROR_MESSAGES.USER_ALREADY_EXISTS);
    }

    const findUser = await this._usersService.findByUsernameOrPhoneOrEmail(
      username,
      email,
      phone,
    );

    if (!isEmpty(findUser)) {
      if (username === findUser.username) {
        throw buildResponse(
          false,
          null,
          ERROR_MESSAGES.USER_NAME_ALREADY_EXISTS,
        );
      }
      if (email === findUser.email) {
        throw buildResponse(
          false,
          null,
          ERROR_MESSAGES.USER_EMAIL_ALREADY_EXISTS,
        );
      }
      if (phone === findUser.phone) {
        throw buildResponse(
          false,
          null,
          ERROR_MESSAGES.USER_PHONE_ALREADY_EXISTS,
        );
      }
    }

    const country = await this._countriesService.findById(countryId);

    if (!country) {
      throw buildResponse(false, null, ERROR_MESSAGES.INVALID_COUNTRY_ID);
    }

    const user = await this._usersService.create({
      ...omit({ ...body, country }, ['passwordConfirm', 'countryId', 'avatar']),
      customerId: customerId,
    });

    if (avatar) {
      const extension = avatar?.originalname?.split('.')?.pop();

      const { Location: path } = await this._awsS3Service.uploadS3(
        avatar.buffer,
        `${customerId}/avatar.${extension}`,
      );

      const dbAvatar = await this._mediaFilesService.create({
        path,
      });
      await this._usersService.update(user.id, {
        avatar: dbAvatar,
      });
    }

    await this._integrationsService.insertIntegrationServices(user);

    const tokens: IAuthTokens = {
      accessToken: await this.createAccessToken({
        id: user.id,
        isVerified: true,
        customerId,
      }),
      refreshToken: await this.createRefreshToken(user.customerId),
    };
    return buildResponse(true, tokens);
  }

  @Transactional()
  async login(body: ILogin): Promise<AccessTokenDTO> {
    const { login, password } = body;
    const user = await this.validateUserByPhoneAndPassword(login, password);
    if (!user) {
      throw buildResponse(false, null, ERROR_MESSAGES.USER_WRONG_CREDENTIALS);
    }
    const { code } = await this._verificationCodesService.sendSmsAndSaveById(
      user.id,
      user.phone,
    );

    const tokens: AccessTokenDTO = {
      accessToken: await this.createAccessToken({
        id: user.id,
        isVerified: false,
        customerId: user.customerId,
      }),
      code,
    };
    return buildResponse(true, tokens);
  }

  @Transactional()
  async checkTwoFactorCode(body: ICheckVerificationCode, id: number) {
    const { code } = body;

    await this._verificationCodesService.checkUserVerificationCode(id, code);

    const { customerId } = await this._usersService.findOne({ id });

    const tokens: IAuthTokens = {
      accessToken: await this.createAccessToken({
        id,
        isVerified: true,
        customerId: customerId,
      }),
      refreshToken: await this.createRefreshToken(customerId),
    };
    return buildResponse(true, tokens);
  }

  @Transactional()
  async checkVerificationCode(
    body: ICheckVerificationCode,
    user: ITokenPayload,
  ) {
    const { customerId } = user;
    const { code } = body;
    await this._verificationCodesService.checkCustomerIdVerificationCode(
      customerId,
      code,
    );
    const tokens: AccessTokenDTO = {
      accessToken: await this.createAccessToken(
        {
          customerId,
          isVerified: true,
        },
        false,
      ),
    };
    return buildResponse(true, tokens);
  }

  async setPassword(
    user: ITokenPayload,
    body: PasswordSetDTO,
  ): Promise<IAuthTokens> {
    const { id, customerId } = user;

    const { password } = await this._usersService.findOne({ id });

    if (password) {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.USER_PASSWORD_ALREADY_SET,
      );
    }

    await this._usersService.update(id, omit(body, 'passwordConfirm'));

    const tokens: IAuthTokens = {
      accessToken: await this.createAccessToken({
        id,
        isVerified: true,
        customerId,
      }),
      refreshToken: await this.createRefreshToken(user.customerId),
    };
    return buildResponse(true, tokens);
  }

  // Code will be removed, soon.
  @Transactional()
  async resendCode(
    payloadUser: ITokenPayload,
  ): Promise<IMessageSuccess & { code: string }> {
    const { id, customerId } = payloadUser;

    const user = await this._usersService.findOne({ id });

    if (id && user) {
      const { phone } = user;
      const { code } = await this._verificationCodesService.sendSmsAndSaveById(
        id,
        phone,
      );

      return buildResponse(true, {
        message: "Message successfully sent to the user's phone number.",
        success: true,
        code,
      });
    } else {
      const { phone } = await this._usersService.getCustomerByCustomerId(
        customerId,
      );
      const { code } =
        await this._verificationCodesService.sendSmsAndSaveByCustomerId(
          customerId,
          phone,
        );

      return buildResponse(true, {
        message: "Message successfully sent to the customer's phone number.",
        success: true,
        code,
      });
    }
  }

  @Transactional()
  async checkUsername(body: ICheckUsername): Promise<IUsernameExists> {
    const { username } = body;
    const user: User = await this._usersService.findOne({ username });
    return {
      usernameExists: !!user,
    };
  }

  @Transactional()
  async checkEmail(body: ICheckEmail): Promise<IEmailExists> {
    const { email } = body;
    const user: User = await this._usersService.findOne({ email });

    return {
      emailExists: !!user,
    };
  }
}

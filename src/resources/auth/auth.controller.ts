import { AuthUser } from '@common/decorators/user.decorator';
import { AuthCustomerGuard, CheckTokenGuard } from '@common/guards';
import { AccessTokenDTO, AuthTokensDTO } from '@common/dtos';

import {
  RegisterDTO,
  LoginDTO,
  CheckUsernameDTO,
  UsernameExistsDTO,
  MessageSuccessCodeDTO,
  EmailExistsDTO,
} from './dto';

import {
  Body,
  Controller,
  Headers,
  HttpCode,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
} from '@nestjs/swagger';

import { AuthService } from './auth.service';

import {
  CheckUserAuthBodyDTO,
  CheckUserAuthDTO,
  CheckVerificationCodeDTO,
} from './dto';

import { FileInterceptor } from '@nestjs/platform-express';

import { ITokenPayload } from '@common/models';
import { CheckEmailDTO } from './dto/check-email.dto';

@ApiTags('Authentication management')
@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) { }

  @Post('check')
  @ApiOperation({
    summary: 'Check the email or phone before authentication.',
  })
  checkUserByLogin(
    @Body() body: CheckUserAuthBodyDTO,
  ): Promise<CheckUserAuthDTO> {
    return this._authService.checkUserAuth(body);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login API',
  })
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginDTO): Promise<AccessTokenDTO> {
    return this._authService.login(body);
  }

  @Post('register')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'This API aimed to register the user.',
  })
  @ApiCreatedResponse({
    type: AuthTokensDTO,
  })
  @UseInterceptors(FileInterceptor('avatar'))
  @UseGuards(AuthCustomerGuard)
  async register(
    @Body() body: RegisterDTO,
    @AuthUser() user: ITokenPayload,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /.(jpg|jpeg|png)$/,
        })
        .addMaxSizeValidator({
          maxSize: 5 * 1000 * 1000, // Byte to MegaByte
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          fileIsRequired: false,
        }),
    )
    avatar: Express.Multer.File,
  ): Promise<AuthTokensDTO> {
    return this._authService.register(body, user, avatar);
  }

  @Post('/refresh')
  @ApiOperation({
    summary:
      'This API aimed to check the "refresh token" and refresh the "access token".',
  })
  async refreshToken(
    @Headers('authorization') refreshToken: string,
  ): Promise<AuthTokensDTO> {
    return this._authService.refreshAccessToken(refreshToken);
  }

  @Post('2fa')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'This API aimed to verify the 2fa code.',
  })
  @ApiCreatedResponse({
    type: AuthTokensDTO,
  })
  @UseGuards(CheckTokenGuard)
  async checkTwoFactorCode(
    @Body() body: CheckVerificationCodeDTO,
    @AuthUser('id') id: number,
  ): Promise<AccessTokenDTO> {
    return this._authService.checkTwoFactorCode(body, id);
  }

  @Post('phone/verify')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'This API aimed to verify the users code.',
  })
  @UseGuards(CheckTokenGuard)
  async checkVerificationCode(
    @Body() body: CheckVerificationCodeDTO,
    @AuthUser() user: ITokenPayload,
  ): Promise<AccessTokenDTO> {
    return this._authService.checkVerificationCode(body, user);
  }

  @Post('code/resend')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'This API aimed to resend a new code.',
  })
  @UseGuards(CheckTokenGuard)
  async resendCode(
    @AuthUser() user: ITokenPayload,
    // Code will be removed, soon.
  ): Promise<MessageSuccessCodeDTO> {
    return this._authService.resendCode(user);
  }

  @Post('username/check')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'This API aimed to check the username.',
  })
  @UseGuards(AuthCustomerGuard)
  async checkUsername(
    @Body() body: CheckUsernameDTO,
  ): Promise<UsernameExistsDTO> {
    return this._authService.checkUsername(body);
  }


  @Post('email/check')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'This API aimed to check the email.',
  })
  @UseGuards(AuthCustomerGuard)
  async checkEmail(
    @Body() body: CheckEmailDTO,
  ): Promise<EmailExistsDTO> {
    return this._authService.checkEmail(body);
  }
}

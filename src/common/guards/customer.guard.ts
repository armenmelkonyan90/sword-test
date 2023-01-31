import { JwtService } from '@nestjs/jwt';

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from '@nestjs/common';

import { ITokenPayload } from '@common/models';
import { ConfigService } from '@nestjs/config';
import { buildResponse } from '@common/helpers';
import { ERROR_MESSAGES } from '@common/messages';

@Injectable()
export class AuthCustomerGuard implements CanActivate {
  constructor(
    private readonly _jwtService: JwtService,
    private readonly _configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = request.headers?.authorization
      ?.replace('Bearer', '')
      ?.trim();
    if (!accessToken) {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.USER_UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }

    try {
      await this._jwtService.verify(accessToken, {
        secret: this._configService.get('JWT_CONFIG.secret'),
      });
      const payload = this._jwtService.decode(accessToken) as ITokenPayload;

      if (!payload.isVerified) {
        throw buildResponse(
          false,
          null,
          ERROR_MESSAGES.USER_NOT_VERIFIED,
          HttpStatus.UNAUTHORIZED,
        );
      }

      request.user = payload;
      return true;
    } catch (e) {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.USER_UNAUTHORIZED,
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}

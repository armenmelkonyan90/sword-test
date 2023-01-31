import { IntegrationsModule } from '@resources/integrations';
import { MediaModule } from '@resources/media';

import { AwsS3Module } from '@shared/s3';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@common/database/entities';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { SenderModule } from '@shared/sender';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { VerificationCodesModule } from '../verification-codes';
import { UsersModule } from '../user';
import { CountriesModule } from '../countries';

@Module({
  imports: [
    AwsS3Module,
    SenderModule,
    UsersModule,
    VerificationCodesModule,
    MediaModule,
    CountriesModule,
    IntegrationsModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>(`JWT_CONFIG.primarySecret`),
        signOptions: {
          expiresIn: configService.get<string>(`JWT_CONFIG.expiresIn`),
        },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }

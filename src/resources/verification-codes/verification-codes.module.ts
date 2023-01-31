import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { VerificationCodesService } from './verification-codes.service';

import * as ENTITIES from '@common/database/entities';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { SenderModule } from '@shared/sender';

@Module({
  imports: [
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
    TypeOrmModule.forFeature([ENTITIES.User, ENTITIES.VerificationCodes]),
    SenderModule,
  ],
  providers: [VerificationCodesService],
  exports: [VerificationCodesService],
})
export class VerificationCodesModule {}

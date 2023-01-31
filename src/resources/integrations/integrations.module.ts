import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  IntegrationServices,
  IntegrationServiceStatus,
} from '@common/database/entities';

import { UsersModule } from '../user';
import { IntegrationsController } from './integrations.controller';
import { IntegrationsService } from './integrations.service';

import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { FiatModule } from '@shared/fiat';

@Module({
  imports: [
    TypeOrmModule.forFeature([IntegrationServices, IntegrationServiceStatus]),
    UsersModule,
    FiatModule,
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
  ],
  controllers: [IntegrationsController],
  providers: [IntegrationsService],
  exports: [IntegrationsService]
})
export class IntegrationsModule { }

// -----------------------------------------------------------------------------
// IMPORT CONFIGS
import { ENV_CONST } from '@common/constants';
import {
  databaseConfiguration,
  jwtConfig,
  appConfig,
  awsConfig,
  emailConfig,
  smsConfig,
} from '@common/config';
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// IMPORT NEST IN BOX LIBS SECTION
// -----------------------------------------------------------------------------
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { HttpModule } from '@nestjs/axios';

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// IMPORT MODULES SECTION
// -----------------------------------------------------------------------------
import {
  UsersModule,
  VerificationCodesModule,
  AuthModule,
  ActivityLogsModule,
  IntegrationsModule,
  MediaModule,
  CountriesModule,
  WebhooksModule,
} from '@resources/index';

import {
  FiatModule,
  SenderModule,
  CronModule,
  AwsS3Module,
} from '@shared/index';

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// IMPORT SERVICES SECTION
// -----------------------------------------------------------------------------
import { AppService } from './app.service';
// ----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// IMPORT CONTROLLERS SECTION
// -----------------------------------------------------------------------------
import { AppController } from './app.controller';
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// VALIDATORS IMPORTS
import validators from '@common/validators';
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// MIDDLEWARES
import { IpMiddleware } from '@common/middleware';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';

// -----------------------------------------------------------------------------
// Sockets
import { SocketIoModule } from '@common/gateways/socket';

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// VARIABLES
const isProductionMode = process.env.NODE_ENV === ENV_CONST.ENV_MODE_PRODUCTION;

const envFilePath = isProductionMode
  ? ENV_CONST.ENV_PATH_PROD
  : ENV_CONST.ENV_PATH_DEV;
// -----------------------------------------------------------------------------

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/uploads',
      rootPath: 'uploads',
    }),
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      expandVariables: true,
      validationSchema: validators,
      load: [
        jwtConfig,
        appConfig,
        awsConfig,
        databaseConfiguration,
        emailConfig,
        smsConfig,
      ],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>(`DB_CONFIG.host`),
          port: configService.get<number>(`DB_CONFIG.port`),
          username: configService.get<string>(`DB_CONFIG.username`),
          password: configService.get<string>(`DB_CONFIG.password`),
          database: configService.get<string>(`DB_CONFIG.database`),
          autoLoadEntities: true,
          // entities: ['dist/**/*.entity{.ts,.js}'],
          // Do not use synchronize in production mode
          // https://docs.nestjs.com/techniques/database
          synchronize: configService.get<boolean>(`DB_CONFIG.sync`),
        };
      },
      async dataSourceFactory(options) {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    CronModule,
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 50, // No Limitation
      }),
    }),
    AwsS3Module,
    SenderModule,
    VerificationCodesModule,
    AuthModule,
    HttpModule,
    UsersModule,
    ActivityLogsModule,
    FiatModule,
    IntegrationsModule,
    MediaModule,
    CountriesModule,
    WebhooksModule,
    SocketIoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IpMiddleware).forRoutes('*');
  }
}

// -----------------------------------------------------------------------------
// NEST.JS IMPORT SECTION
// -----------------------------------------------------------------------------
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpStatus, ValidationPipe, VersioningType } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
import compression from 'compression';
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// APP RELATED MODULES IMPORT SECTION
// -----------------------------------------------------------------------------
import { AppModule } from './app.module';
// -----------------------------------------------------------------------------

import { buildResponse } from '@common/helpers';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { Reflector } from '@nestjs/core/services';

import { HttpExceptionFilter } from '@common/filters';

import { snakeCase } from 'lodash';
import { IValidationErrors } from '@common/models';

import { initializeTransactionalContext } from 'typeorm-transactional';

const PORT = process.env.PORT || 5000;

process.env.TZ = 'Etc/UTC';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(compression());
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.enableCors();
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: false,
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      stopAtFirstError: true,
      exceptionFactory: (errors) => {
        const errorResponse: IValidationErrors[] = [];
        errors.forEach((e) => {
          const constraintKeys = Object.keys(e.constraints);
          for (const item of constraintKeys) {
            errorResponse.push({
              field: e.property,
              message: `err_${snakeCase(item)}`,
            });
          }
        });
        throw buildResponse(
          false,
          null,
          { errors: errorResponse, message: 'ValidationError' },
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .addServer('/')
      .setTitle('Sword APIs')
      .setDescription('The Sword API description')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(PORT);
}
bootstrap();

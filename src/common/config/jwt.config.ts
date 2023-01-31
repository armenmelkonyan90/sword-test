import { IJwt } from '@common/models';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'JWT_CONFIG',
  (): IJwt => ({
    secret: process.env.JWT_SECRET || 'secretKey',
    primarySecret: process.env.PRIMARY_JWT_SECRET || 'primarySecretKey',
    expiresIn: process.env.JWT_EXPIRES_ON || '900s', // 2 minutes
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_ON || '864000s', // 10 days
  }),
);

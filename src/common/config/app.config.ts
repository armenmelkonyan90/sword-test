import { IApp } from '../models/common/app.model';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'APP_CONFIG',
  (): IApp => ({
    NODE_ENV: process.env.NODE_ENV,
    ENVIRONMENT: process.env.ENVIRONMENT ?? 'local',
    ENCRYPTION_PASSWORD:
      process.env.ENCRYPTION_PASSWORD ?? 'Password_used_to_generate_a_key.',
  }),
);

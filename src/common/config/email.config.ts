import { IEmailConfig } from '@common/models';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'EMAIL_CONFIG',
  (): IEmailConfig => ({
    from: process.env.FROM_EMAIL,
  }),
);

import { registerAs } from '@nestjs/config';

import { IDatabaseConnection } from '@common/models';

export default registerAs(
  'DB_CONFIG',
  (): IDatabaseConnection => ({
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 5432,
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME,
    sync: process.env.DB_SYNC === 'true' ? true : false,
  }),
);

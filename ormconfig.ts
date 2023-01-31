import * as path from 'path';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import {
  initializeTransactionalContext,
  addTransactionalDataSource,
} from 'typeorm-transactional';

const envModeProduction = process.env.ENV_MODE === 'production';

const envFile = path.resolve(
  __dirname,
  envModeProduction ? '.env.production' : '.env.development',
);

dotenv.config({
  path: envFile,
});

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['../entities/*.entity.{js,ts}'],
  migrationsTableName: 'sword_migrations',
  migrations: [
    process.env.CUSTOM_DB_MIGRATION_DIR
      ? process.env.CUSTOM_DB_MIGRATION_DIR + '/*.ts'
      : './src/common/database/migrations/*.ts',
  ],
});

initializeTransactionalContext();
addTransactionalDataSource(dataSource);

import { MigrationInterface, QueryRunner } from 'typeorm';

export class services1674081081938 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.integration_services(id,name,type,created_at,updated_at) VALUES (1, 'INTERGIRO', 'fiat', '2023-01-18 22:27:50.754828', '2023-01-18 22:27:50.754828');`,
    );
    await queryRunner.query(
      `INSERT INTO public.integration_services(id,name,type,created_at,updated_at) VALUES (2, 'BINANCE', 'crypto', '2023-01-18 22:27:50.754828', '2023-01-18 22:27:50.754828');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.integration_services;`);
  }
}

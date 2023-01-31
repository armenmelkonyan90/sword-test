import { MigrationInterface, QueryRunner } from 'typeorm';

export class in1674762031589 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DO $$
    BEGIN
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'integration_services_countries_countries') THEN
            EXECUTE 'INSERT INTO public.integration_services_countries SELECT * FROM public.integration_services_countries_countries';
        END IF;
    END $$;
    `); // Migrate integration_services_countries_countries to integration_services_countries

    await queryRunner.query(`DO $$
    BEGIN
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'integration_service_statuses') THEN
            EXECUTE 'INSERT INTO public.integration_service_status (id, status,created_at,updated_at,user_id,integration_service_id,reffernce_id)
            SELECT id, ''initial'' as status,created_at,updated_at,user_id,integration_service_id,reffernce_id FROM public.integration_service_statuses';
        END IF;
    END $$;`); // Migrate integration_service_statuses to integration_service_status

    await queryRunner.query(
      `DELETE FROM public.integration_services_countries
        WHERE integration_service_id = 1
        AND country_id NOT IN (
            SELECT id FROM public.countries WHERE continent = 'Europe'
        );`,
    );

    await queryRunner.query(
      `DELETE FROM public.integration_services_countries
        WHERE integration_service_id = 2
        AND country_id IN (
          SELECT id FROM public.countries WHERE continent = 'Europe'
        );`,
    );

    await queryRunner.query(
      `DROP TABLE IF EXISTS public.integration_services_countries_countries CASCADE;`,
    );
    await queryRunner.query(
      `DROP TABLE IF EXISTS public.integration_service_statuses CASCADE;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.integration_services_countries(integration_service_id, country_id)
      SELECT 1, id FROM public.countries
      WHERE id NOT IN (
          SELECT id FROM public.countries WHERE continent = 'Europe'
      );`,
    );
    await queryRunner.query(
      `INSERT INTO public.integration_services_countries(integration_service_id, country_id)
      SELECT 2, id FROM public.countries
      WHERE id IN (
          SELECT id FROM public.countries WHERE continent = 'Europe'
      );`,
    );
  }
}

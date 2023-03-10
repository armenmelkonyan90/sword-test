import { MigrationInterface, QueryRunner } from 'typeorm';

export class integrationCountries1674393571565 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO public.integration_services_countries VALUES (2, 1); 
    INSERT INTO public.integration_services_countries VALUES (1, 1); 
    INSERT INTO public.integration_services_countries VALUES (2, 2); 
    INSERT INTO public.integration_services_countries VALUES (1, 2); 
    INSERT INTO public.integration_services_countries VALUES (2, 3); 
    INSERT INTO public.integration_services_countries VALUES (2, 4); 
    INSERT INTO public.integration_services_countries VALUES (1, 4); 
    INSERT INTO public.integration_services_countries VALUES (2, 5); 
    INSERT INTO public.integration_services_countries VALUES (1, 5); 
    INSERT INTO public.integration_services_countries VALUES (2, 6); 
    INSERT INTO public.integration_services_countries VALUES (1, 6); 
    INSERT INTO public.integration_services_countries VALUES (2, 7); 
    INSERT INTO public.integration_services_countries VALUES (1, 7); 
    INSERT INTO public.integration_services_countries VALUES (2, 8); 
    INSERT INTO public.integration_services_countries VALUES (1, 8); 
    INSERT INTO public.integration_services_countries VALUES (2, 9); 
    INSERT INTO public.integration_services_countries VALUES (1, 9); 
    INSERT INTO public.integration_services_countries VALUES (2, 10); 
    INSERT INTO public.integration_services_countries VALUES (1, 10); 
    INSERT INTO public.integration_services_countries VALUES (2, 11); 
    INSERT INTO public.integration_services_countries VALUES (1, 11); 
    INSERT INTO public.integration_services_countries VALUES (2, 12); 
    INSERT INTO public.integration_services_countries VALUES (1, 12); 
    INSERT INTO public.integration_services_countries VALUES (2, 13); 
    INSERT INTO public.integration_services_countries VALUES (1, 13); 
    INSERT INTO public.integration_services_countries VALUES (2, 14); 
    INSERT INTO public.integration_services_countries VALUES (1, 14); 
    INSERT INTO public.integration_services_countries VALUES (2, 15); 
    INSERT INTO public.integration_services_countries VALUES (1, 15); 
    INSERT INTO public.integration_services_countries VALUES (2, 16); 
    INSERT INTO public.integration_services_countries VALUES (2, 17); 
    INSERT INTO public.integration_services_countries VALUES (1, 17); 
    INSERT INTO public.integration_services_countries VALUES (2, 18); 
    INSERT INTO public.integration_services_countries VALUES (1, 18); 
    INSERT INTO public.integration_services_countries VALUES (2, 19); 
    INSERT INTO public.integration_services_countries VALUES (1, 19); 
    INSERT INTO public.integration_services_countries VALUES (2, 20); 
    INSERT INTO public.integration_services_countries VALUES (1, 20); 
    INSERT INTO public.integration_services_countries VALUES (2, 21); 
    INSERT INTO public.integration_services_countries VALUES (1, 21); 
    INSERT INTO public.integration_services_countries VALUES (2, 22); 
    INSERT INTO public.integration_services_countries VALUES (1, 22); 
    INSERT INTO public.integration_services_countries VALUES (2, 23); 
    INSERT INTO public.integration_services_countries VALUES (1, 23); 
    INSERT INTO public.integration_services_countries VALUES (2, 24); 
    INSERT INTO public.integration_services_countries VALUES (1, 24); 
    INSERT INTO public.integration_services_countries VALUES (2, 25); 
    INSERT INTO public.integration_services_countries VALUES (1, 25); 
    INSERT INTO public.integration_services_countries VALUES (2, 26); 
    INSERT INTO public.integration_services_countries VALUES (1, 26); 
    INSERT INTO public.integration_services_countries VALUES (2, 27); 
    INSERT INTO public.integration_services_countries VALUES (1, 27); 
    INSERT INTO public.integration_services_countries VALUES (2, 28); 
    INSERT INTO public.integration_services_countries VALUES (1, 28); 
    INSERT INTO public.integration_services_countries VALUES (2, 29); 
    INSERT INTO public.integration_services_countries VALUES (1, 29); 
    INSERT INTO public.integration_services_countries VALUES (2, 30); 
    INSERT INTO public.integration_services_countries VALUES (1, 30); 
    INSERT INTO public.integration_services_countries VALUES (2, 31); 
    INSERT INTO public.integration_services_countries VALUES (1, 31); 
    INSERT INTO public.integration_services_countries VALUES (2, 32); 
    INSERT INTO public.integration_services_countries VALUES (1, 32); 
    INSERT INTO public.integration_services_countries VALUES (2, 33); 
    INSERT INTO public.integration_services_countries VALUES (1, 33); 
    INSERT INTO public.integration_services_countries VALUES (2, 34); 
    INSERT INTO public.integration_services_countries VALUES (1, 34); 
    INSERT INTO public.integration_services_countries VALUES (2, 35); 
    INSERT INTO public.integration_services_countries VALUES (1, 35); 
    INSERT INTO public.integration_services_countries VALUES (2, 36); 
    INSERT INTO public.integration_services_countries VALUES (1, 36); 
    INSERT INTO public.integration_services_countries VALUES (2, 37); 
    INSERT INTO public.integration_services_countries VALUES (2, 38); 
    INSERT INTO public.integration_services_countries VALUES (1, 38); 
    INSERT INTO public.integration_services_countries VALUES (2, 39); 
    INSERT INTO public.integration_services_countries VALUES (1, 39); 
    INSERT INTO public.integration_services_countries VALUES (2, 40); 
    INSERT INTO public.integration_services_countries VALUES (1, 40); 
    INSERT INTO public.integration_services_countries VALUES (2, 41); 
    INSERT INTO public.integration_services_countries VALUES (1, 41); 
    INSERT INTO public.integration_services_countries VALUES (2, 42); 
    INSERT INTO public.integration_services_countries VALUES (1, 42); 
    INSERT INTO public.integration_services_countries VALUES (2, 43); 
    INSERT INTO public.integration_services_countries VALUES (1, 43); 
    INSERT INTO public.integration_services_countries VALUES (2, 44); 
    INSERT INTO public.integration_services_countries VALUES (1, 44); 
    INSERT INTO public.integration_services_countries VALUES (2, 45); 
    INSERT INTO public.integration_services_countries VALUES (1, 45); 
    INSERT INTO public.integration_services_countries VALUES (2, 46); 
    INSERT INTO public.integration_services_countries VALUES (1, 46); 
    INSERT INTO public.integration_services_countries VALUES (2, 47); 
    INSERT INTO public.integration_services_countries VALUES (2, 48); 
    INSERT INTO public.integration_services_countries VALUES (1, 48); 
    INSERT INTO public.integration_services_countries VALUES (2, 49); 
    INSERT INTO public.integration_services_countries VALUES (1, 49); 
    INSERT INTO public.integration_services_countries VALUES (2, 50); 
    INSERT INTO public.integration_services_countries VALUES (1, 50); 
    INSERT INTO public.integration_services_countries VALUES (2, 51); 
    INSERT INTO public.integration_services_countries VALUES (1, 51); 
    INSERT INTO public.integration_services_countries VALUES (2, 52); 
    INSERT INTO public.integration_services_countries VALUES (1, 52); 
    INSERT INTO public.integration_services_countries VALUES (2, 53); 
    INSERT INTO public.integration_services_countries VALUES (1, 53); 
    INSERT INTO public.integration_services_countries VALUES (2, 54); 
    INSERT INTO public.integration_services_countries VALUES (1, 54); 
    INSERT INTO public.integration_services_countries VALUES (2, 55); 
    INSERT INTO public.integration_services_countries VALUES (1, 55); 
    INSERT INTO public.integration_services_countries VALUES (2, 56); 
    INSERT INTO public.integration_services_countries VALUES (1, 56); 
    INSERT INTO public.integration_services_countries VALUES (2, 57); 
    INSERT INTO public.integration_services_countries VALUES (1, 57); 
    INSERT INTO public.integration_services_countries VALUES (2, 58); 
    INSERT INTO public.integration_services_countries VALUES (1, 58); 
    INSERT INTO public.integration_services_countries VALUES (2, 59); 
    INSERT INTO public.integration_services_countries VALUES (1, 59); 
    INSERT INTO public.integration_services_countries VALUES (2, 60); 
    INSERT INTO public.integration_services_countries VALUES (1, 60); 
    INSERT INTO public.integration_services_countries VALUES (2, 61); 
    INSERT INTO public.integration_services_countries VALUES (1, 61); 
    INSERT INTO public.integration_services_countries VALUES (2, 62); 
    INSERT INTO public.integration_services_countries VALUES (1, 62); 
    INSERT INTO public.integration_services_countries VALUES (2, 63); 
    INSERT INTO public.integration_services_countries VALUES (1, 63); 
    INSERT INTO public.integration_services_countries VALUES (2, 64); 
    INSERT INTO public.integration_services_countries VALUES (1, 64); 
    INSERT INTO public.integration_services_countries VALUES (2, 65); 
    INSERT INTO public.integration_services_countries VALUES (1, 65); 
    INSERT INTO public.integration_services_countries VALUES (2, 66); 
    INSERT INTO public.integration_services_countries VALUES (1, 66); 
    INSERT INTO public.integration_services_countries VALUES (2, 67); 
    INSERT INTO public.integration_services_countries VALUES (1, 67); 
    INSERT INTO public.integration_services_countries VALUES (2, 68); 
    INSERT INTO public.integration_services_countries VALUES (1, 68); 
    INSERT INTO public.integration_services_countries VALUES (2, 69); 
    INSERT INTO public.integration_services_countries VALUES (1, 69); 
    INSERT INTO public.integration_services_countries VALUES (2, 70); 
    INSERT INTO public.integration_services_countries VALUES (1, 70); 
    INSERT INTO public.integration_services_countries VALUES (2, 71); 
    INSERT INTO public.integration_services_countries VALUES (1, 71); 
    INSERT INTO public.integration_services_countries VALUES (2, 72); 
    INSERT INTO public.integration_services_countries VALUES (1, 72); 
    INSERT INTO public.integration_services_countries VALUES (2, 73); 
    INSERT INTO public.integration_services_countries VALUES (1, 73); 
    INSERT INTO public.integration_services_countries VALUES (2, 74); 
    INSERT INTO public.integration_services_countries VALUES (1, 74); 
    INSERT INTO public.integration_services_countries VALUES (2, 75); 
    INSERT INTO public.integration_services_countries VALUES (1, 75); 
    INSERT INTO public.integration_services_countries VALUES (2, 76); 
    INSERT INTO public.integration_services_countries VALUES (1, 76); 
    INSERT INTO public.integration_services_countries VALUES (2, 77); 
    INSERT INTO public.integration_services_countries VALUES (1, 77); 
    INSERT INTO public.integration_services_countries VALUES (2, 78); 
    INSERT INTO public.integration_services_countries VALUES (1, 78); 
    INSERT INTO public.integration_services_countries VALUES (2, 79); 
    INSERT INTO public.integration_services_countries VALUES (1, 79); 
    INSERT INTO public.integration_services_countries VALUES (2, 80); 
    INSERT INTO public.integration_services_countries VALUES (1, 80); 
    INSERT INTO public.integration_services_countries VALUES (2, 81); 
    INSERT INTO public.integration_services_countries VALUES (1, 81); 
    INSERT INTO public.integration_services_countries VALUES (2, 82); 
    INSERT INTO public.integration_services_countries VALUES (1, 82); 
    INSERT INTO public.integration_services_countries VALUES (2, 83); 
    INSERT INTO public.integration_services_countries VALUES (1, 83); 
    INSERT INTO public.integration_services_countries VALUES (2, 84); 
    INSERT INTO public.integration_services_countries VALUES (1, 84); 
    INSERT INTO public.integration_services_countries VALUES (2, 85); 
    INSERT INTO public.integration_services_countries VALUES (1, 85); 
    INSERT INTO public.integration_services_countries VALUES (2, 86); 
    INSERT INTO public.integration_services_countries VALUES (1, 86); 
    INSERT INTO public.integration_services_countries VALUES (2, 87); 
    INSERT INTO public.integration_services_countries VALUES (1, 87); 
    INSERT INTO public.integration_services_countries VALUES (2, 88); 
    INSERT INTO public.integration_services_countries VALUES (1, 88); 
    INSERT INTO public.integration_services_countries VALUES (2, 89); 
    INSERT INTO public.integration_services_countries VALUES (1, 89); 
    INSERT INTO public.integration_services_countries VALUES (2, 90); 
    INSERT INTO public.integration_services_countries VALUES (1, 90); 
    INSERT INTO public.integration_services_countries VALUES (2, 91); 
    INSERT INTO public.integration_services_countries VALUES (1, 91); 
    INSERT INTO public.integration_services_countries VALUES (2, 92); 
    INSERT INTO public.integration_services_countries VALUES (1, 92); 
    INSERT INTO public.integration_services_countries VALUES (2, 93); 
    INSERT INTO public.integration_services_countries VALUES (1, 93); 
    INSERT INTO public.integration_services_countries VALUES (2, 94); 
    INSERT INTO public.integration_services_countries VALUES (1, 94); 
    INSERT INTO public.integration_services_countries VALUES (2, 95); 
    INSERT INTO public.integration_services_countries VALUES (1, 95); 
    INSERT INTO public.integration_services_countries VALUES (2, 96); 
    INSERT INTO public.integration_services_countries VALUES (1, 96); 
    INSERT INTO public.integration_services_countries VALUES (2, 97); 
    INSERT INTO public.integration_services_countries VALUES (1, 97); 
    INSERT INTO public.integration_services_countries VALUES (2, 98); 
    INSERT INTO public.integration_services_countries VALUES (2, 99); 
    INSERT INTO public.integration_services_countries VALUES (2, 100); 
    INSERT INTO public.integration_services_countries VALUES (1, 100); 
    INSERT INTO public.integration_services_countries VALUES (2, 101); 
    INSERT INTO public.integration_services_countries VALUES (1, 101); 
    INSERT INTO public.integration_services_countries VALUES (2, 102); 
    INSERT INTO public.integration_services_countries VALUES (1, 102); 
    INSERT INTO public.integration_services_countries VALUES (2, 103); 
    INSERT INTO public.integration_services_countries VALUES (1, 103); 
    INSERT INTO public.integration_services_countries VALUES (2, 104); 
    INSERT INTO public.integration_services_countries VALUES (1, 104); 
    INSERT INTO public.integration_services_countries VALUES (2, 105); 
    INSERT INTO public.integration_services_countries VALUES (1, 105); 
    INSERT INTO public.integration_services_countries VALUES (2, 106); 
    INSERT INTO public.integration_services_countries VALUES (1, 106); 
    INSERT INTO public.integration_services_countries VALUES (2, 107); 
    INSERT INTO public.integration_services_countries VALUES (1, 107); 
    INSERT INTO public.integration_services_countries VALUES (2, 108); 
    INSERT INTO public.integration_services_countries VALUES (1, 108); 
    INSERT INTO public.integration_services_countries VALUES (2, 109); 
    INSERT INTO public.integration_services_countries VALUES (1, 109); 
    INSERT INTO public.integration_services_countries VALUES (2, 110); 
    INSERT INTO public.integration_services_countries VALUES (1, 110); 
    INSERT INTO public.integration_services_countries VALUES (2, 111); 
    INSERT INTO public.integration_services_countries VALUES (1, 111); 
    INSERT INTO public.integration_services_countries VALUES (2, 112); 
    INSERT INTO public.integration_services_countries VALUES (2, 113); 
    INSERT INTO public.integration_services_countries VALUES (1, 113); 
    INSERT INTO public.integration_services_countries VALUES (2, 114); 
    INSERT INTO public.integration_services_countries VALUES (1, 114); 
    INSERT INTO public.integration_services_countries VALUES (2, 115); 
    INSERT INTO public.integration_services_countries VALUES (1, 115); 
    INSERT INTO public.integration_services_countries VALUES (2, 116); 
    INSERT INTO public.integration_services_countries VALUES (1, 116); 
    INSERT INTO public.integration_services_countries VALUES (2, 117); 
    INSERT INTO public.integration_services_countries VALUES (1, 117); 
    INSERT INTO public.integration_services_countries VALUES (2, 118); 
    INSERT INTO public.integration_services_countries VALUES (2, 119); 
    INSERT INTO public.integration_services_countries VALUES (1, 119); 
    INSERT INTO public.integration_services_countries VALUES (2, 120); 
    INSERT INTO public.integration_services_countries VALUES (1, 120); 
    INSERT INTO public.integration_services_countries VALUES (2, 121); 
    INSERT INTO public.integration_services_countries VALUES (1, 121); 
    INSERT INTO public.integration_services_countries VALUES (2, 122); 
    INSERT INTO public.integration_services_countries VALUES (1, 122); 
    INSERT INTO public.integration_services_countries VALUES (2, 123); 
    INSERT INTO public.integration_services_countries VALUES (1, 123); 
    INSERT INTO public.integration_services_countries VALUES (2, 124); 
    INSERT INTO public.integration_services_countries VALUES (1, 124); 
    INSERT INTO public.integration_services_countries VALUES (2, 125); 
    INSERT INTO public.integration_services_countries VALUES (1, 125); 
    INSERT INTO public.integration_services_countries VALUES (2, 126); 
    INSERT INTO public.integration_services_countries VALUES (1, 126); 
    INSERT INTO public.integration_services_countries VALUES (2, 127); 
    INSERT INTO public.integration_services_countries VALUES (2, 128); 
    INSERT INTO public.integration_services_countries VALUES (1, 128); 
    INSERT INTO public.integration_services_countries VALUES (2, 129); 
    INSERT INTO public.integration_services_countries VALUES (1, 129); 
    INSERT INTO public.integration_services_countries VALUES (2, 130); 
    INSERT INTO public.integration_services_countries VALUES (1, 130); 
    INSERT INTO public.integration_services_countries VALUES (2, 131); 
    INSERT INTO public.integration_services_countries VALUES (1, 131); 
    INSERT INTO public.integration_services_countries VALUES (2, 132); 
    INSERT INTO public.integration_services_countries VALUES (1, 132); 
    INSERT INTO public.integration_services_countries VALUES (2, 133); 
    INSERT INTO public.integration_services_countries VALUES (1, 133); 
    INSERT INTO public.integration_services_countries VALUES (2, 134); 
    INSERT INTO public.integration_services_countries VALUES (1, 134); 
    INSERT INTO public.integration_services_countries VALUES (2, 135); 
    INSERT INTO public.integration_services_countries VALUES (1, 135); 
    INSERT INTO public.integration_services_countries VALUES (2, 136); 
    INSERT INTO public.integration_services_countries VALUES (2, 137); 
    INSERT INTO public.integration_services_countries VALUES (2, 138); 
    INSERT INTO public.integration_services_countries VALUES (1, 138); 
    INSERT INTO public.integration_services_countries VALUES (2, 139); 
    INSERT INTO public.integration_services_countries VALUES (1, 139); 
    INSERT INTO public.integration_services_countries VALUES (2, 140); 
    INSERT INTO public.integration_services_countries VALUES (1, 140); 
    INSERT INTO public.integration_services_countries VALUES (2, 141); 
    INSERT INTO public.integration_services_countries VALUES (1, 141); 
    INSERT INTO public.integration_services_countries VALUES (2, 142); 
    INSERT INTO public.integration_services_countries VALUES (1, 142); 
    INSERT INTO public.integration_services_countries VALUES (2, 143); 
    INSERT INTO public.integration_services_countries VALUES (1, 143); 
    INSERT INTO public.integration_services_countries VALUES (2, 144); 
    INSERT INTO public.integration_services_countries VALUES (1, 144); 
    INSERT INTO public.integration_services_countries VALUES (2, 145); 
    INSERT INTO public.integration_services_countries VALUES (1, 145); 
    INSERT INTO public.integration_services_countries VALUES (2, 146); 
    INSERT INTO public.integration_services_countries VALUES (1, 146); 
    INSERT INTO public.integration_services_countries VALUES (2, 147); 
    INSERT INTO public.integration_services_countries VALUES (1, 147); 
    INSERT INTO public.integration_services_countries VALUES (2, 148); 
    INSERT INTO public.integration_services_countries VALUES (1, 148); 
    INSERT INTO public.integration_services_countries VALUES (2, 149); 
    INSERT INTO public.integration_services_countries VALUES (1, 149); 
    INSERT INTO public.integration_services_countries VALUES (2, 150); 
    INSERT INTO public.integration_services_countries VALUES (2, 151); 
    INSERT INTO public.integration_services_countries VALUES (1, 151); 
    INSERT INTO public.integration_services_countries VALUES (2, 152); 
    INSERT INTO public.integration_services_countries VALUES (1, 152); 
    INSERT INTO public.integration_services_countries VALUES (2, 153); 
    INSERT INTO public.integration_services_countries VALUES (1, 153); 
    INSERT INTO public.integration_services_countries VALUES (2, 154); 
    INSERT INTO public.integration_services_countries VALUES (2, 155); 
    INSERT INTO public.integration_services_countries VALUES (1, 155); 
    INSERT INTO public.integration_services_countries VALUES (2, 156); 
    INSERT INTO public.integration_services_countries VALUES (1, 156); 
    INSERT INTO public.integration_services_countries VALUES (2, 157); 
    INSERT INTO public.integration_services_countries VALUES (1, 157); 
    INSERT INTO public.integration_services_countries VALUES (2, 158); 
    INSERT INTO public.integration_services_countries VALUES (1, 158); 
    INSERT INTO public.integration_services_countries VALUES (2, 159); 
    INSERT INTO public.integration_services_countries VALUES (1, 159); 
    INSERT INTO public.integration_services_countries VALUES (2, 160); 
    INSERT INTO public.integration_services_countries VALUES (1, 160); 
    INSERT INTO public.integration_services_countries VALUES (2, 161); 
    INSERT INTO public.integration_services_countries VALUES (1, 161); 
    INSERT INTO public.integration_services_countries VALUES (2, 162); 
    INSERT INTO public.integration_services_countries VALUES (1, 162); 
    INSERT INTO public.integration_services_countries VALUES (2, 163); 
    INSERT INTO public.integration_services_countries VALUES (1, 163); 
    INSERT INTO public.integration_services_countries VALUES (2, 164); 
    INSERT INTO public.integration_services_countries VALUES (1, 164); 
    INSERT INTO public.integration_services_countries VALUES (2, 165); 
    INSERT INTO public.integration_services_countries VALUES (1, 165); 
    INSERT INTO public.integration_services_countries VALUES (2, 166); 
    INSERT INTO public.integration_services_countries VALUES (1, 166); 
    INSERT INTO public.integration_services_countries VALUES (2, 167); 
    INSERT INTO public.integration_services_countries VALUES (2, 168); 
    INSERT INTO public.integration_services_countries VALUES (1, 168); 
    INSERT INTO public.integration_services_countries VALUES (2, 169); 
    INSERT INTO public.integration_services_countries VALUES (1, 169); 
    INSERT INTO public.integration_services_countries VALUES (2, 170); 
    INSERT INTO public.integration_services_countries VALUES (1, 170); 
    INSERT INTO public.integration_services_countries VALUES (2, 171); 
    INSERT INTO public.integration_services_countries VALUES (1, 171); 
    INSERT INTO public.integration_services_countries VALUES (2, 172); 
    INSERT INTO public.integration_services_countries VALUES (1, 172); 
    INSERT INTO public.integration_services_countries VALUES (2, 173); 
    INSERT INTO public.integration_services_countries VALUES (1, 173); 
    INSERT INTO public.integration_services_countries VALUES (2, 174); 
    INSERT INTO public.integration_services_countries VALUES (1, 174); 
    INSERT INTO public.integration_services_countries VALUES (2, 175); 
    INSERT INTO public.integration_services_countries VALUES (1, 175); 
    INSERT INTO public.integration_services_countries VALUES (2, 176); 
    INSERT INTO public.integration_services_countries VALUES (1, 176); 
    INSERT INTO public.integration_services_countries VALUES (2, 177); 
    INSERT INTO public.integration_services_countries VALUES (1, 177); 
    INSERT INTO public.integration_services_countries VALUES (2, 178); 
    INSERT INTO public.integration_services_countries VALUES (1, 178); 
    INSERT INTO public.integration_services_countries VALUES (2, 179); 
    INSERT INTO public.integration_services_countries VALUES (1, 179); 
    INSERT INTO public.integration_services_countries VALUES (2, 180); 
    INSERT INTO public.integration_services_countries VALUES (1, 180); 
    INSERT INTO public.integration_services_countries VALUES (2, 181); 
    INSERT INTO public.integration_services_countries VALUES (1, 181); 
    INSERT INTO public.integration_services_countries VALUES (2, 182); 
    INSERT INTO public.integration_services_countries VALUES (1, 182); 
    INSERT INTO public.integration_services_countries VALUES (2, 183); 
    INSERT INTO public.integration_services_countries VALUES (1, 183); 
    INSERT INTO public.integration_services_countries VALUES (2, 184); 
    INSERT INTO public.integration_services_countries VALUES (2, 185); 
    INSERT INTO public.integration_services_countries VALUES (1, 185); 
    INSERT INTO public.integration_services_countries VALUES (2, 186); 
    INSERT INTO public.integration_services_countries VALUES (1, 186); 
    INSERT INTO public.integration_services_countries VALUES (2, 187); 
    INSERT INTO public.integration_services_countries VALUES (1, 187); 
    INSERT INTO public.integration_services_countries VALUES (2, 188); 
    INSERT INTO public.integration_services_countries VALUES (1, 188); 
    INSERT INTO public.integration_services_countries VALUES (2, 189); 
    INSERT INTO public.integration_services_countries VALUES (1, 189); 
    INSERT INTO public.integration_services_countries VALUES (2, 190); 
    INSERT INTO public.integration_services_countries VALUES (1, 190); 
    INSERT INTO public.integration_services_countries VALUES (2, 191); 
    INSERT INTO public.integration_services_countries VALUES (1, 191); 
    INSERT INTO public.integration_services_countries VALUES (2, 192); 
    INSERT INTO public.integration_services_countries VALUES (1, 192); 
    INSERT INTO public.integration_services_countries VALUES (2, 193); 
    INSERT INTO public.integration_services_countries VALUES (1, 193); 
    INSERT INTO public.integration_services_countries VALUES (2, 194); 
    INSERT INTO public.integration_services_countries VALUES (2, 195); 
    INSERT INTO public.integration_services_countries VALUES (1, 195); 
    INSERT INTO public.integration_services_countries VALUES (2, 196); 
    INSERT INTO public.integration_services_countries VALUES (2, 197); 
    INSERT INTO public.integration_services_countries VALUES (1, 197); 
    INSERT INTO public.integration_services_countries VALUES (2, 198); 
    INSERT INTO public.integration_services_countries VALUES (1, 198); 
    INSERT INTO public.integration_services_countries VALUES (2, 199); 
    INSERT INTO public.integration_services_countries VALUES (1, 199); 
    INSERT INTO public.integration_services_countries VALUES (2, 200); 
    INSERT INTO public.integration_services_countries VALUES (2, 201); 
    INSERT INTO public.integration_services_countries VALUES (1, 201); 
    INSERT INTO public.integration_services_countries VALUES (2, 202); 
    INSERT INTO public.integration_services_countries VALUES (1, 202); 
    INSERT INTO public.integration_services_countries VALUES (2, 203); 
    INSERT INTO public.integration_services_countries VALUES (1, 203); 
    INSERT INTO public.integration_services_countries VALUES (2, 204); 
    INSERT INTO public.integration_services_countries VALUES (1, 204); 
    INSERT INTO public.integration_services_countries VALUES (2, 205); 
    INSERT INTO public.integration_services_countries VALUES (1, 205); 
    INSERT INTO public.integration_services_countries VALUES (2, 206); 
    INSERT INTO public.integration_services_countries VALUES (1, 206); 
    INSERT INTO public.integration_services_countries VALUES (2, 207); 
    INSERT INTO public.integration_services_countries VALUES (1, 207); 
    INSERT INTO public.integration_services_countries VALUES (2, 208); 
    INSERT INTO public.integration_services_countries VALUES (1, 208); 
    INSERT INTO public.integration_services_countries VALUES (2, 209); 
    INSERT INTO public.integration_services_countries VALUES (1, 209); 
    INSERT INTO public.integration_services_countries VALUES (2, 210); 
    INSERT INTO public.integration_services_countries VALUES (1, 210); 
    INSERT INTO public.integration_services_countries VALUES (2, 211); 
    INSERT INTO public.integration_services_countries VALUES (1, 211); 
    INSERT INTO public.integration_services_countries VALUES (2, 212); 
    INSERT INTO public.integration_services_countries VALUES (1, 212); 
    INSERT INTO public.integration_services_countries VALUES (2, 213); 
    INSERT INTO public.integration_services_countries VALUES (1, 213); 
    INSERT INTO public.integration_services_countries VALUES (2, 214); 
    INSERT INTO public.integration_services_countries VALUES (1, 214); 
    INSERT INTO public.integration_services_countries VALUES (2, 215); 
    INSERT INTO public.integration_services_countries VALUES (1, 215); 
    INSERT INTO public.integration_services_countries VALUES (2, 216); 
    INSERT INTO public.integration_services_countries VALUES (1, 216); 
    INSERT INTO public.integration_services_countries VALUES (2, 217); 
    INSERT INTO public.integration_services_countries VALUES (1, 217); 
    INSERT INTO public.integration_services_countries VALUES (2, 218); 
    INSERT INTO public.integration_services_countries VALUES (1, 218); 
    INSERT INTO public.integration_services_countries VALUES (2, 219); 
    INSERT INTO public.integration_services_countries VALUES (1, 219); 
    INSERT INTO public.integration_services_countries VALUES (2, 220); 
    INSERT INTO public.integration_services_countries VALUES (1, 220); 
    INSERT INTO public.integration_services_countries VALUES (2, 221); 
    INSERT INTO public.integration_services_countries VALUES (1, 221); 
    INSERT INTO public.integration_services_countries VALUES (2, 222); 
    INSERT INTO public.integration_services_countries VALUES (1, 222); 
    INSERT INTO public.integration_services_countries VALUES (2, 223); 
    INSERT INTO public.integration_services_countries VALUES (1, 223); 
    INSERT INTO public.integration_services_countries VALUES (2, 224); 
    INSERT INTO public.integration_services_countries VALUES (2, 225); 
    INSERT INTO public.integration_services_countries VALUES (1, 225); 
    INSERT INTO public.integration_services_countries VALUES (2, 226); 
    INSERT INTO public.integration_services_countries VALUES (1, 226); 
    INSERT INTO public.integration_services_countries VALUES (2, 227); 
    INSERT INTO public.integration_services_countries VALUES (1, 227); 
    INSERT INTO public.integration_services_countries VALUES (2, 228); 
    INSERT INTO public.integration_services_countries VALUES (1, 228); 
    INSERT INTO public.integration_services_countries VALUES (2, 229); 
    INSERT INTO public.integration_services_countries VALUES (1, 229); 
    INSERT INTO public.integration_services_countries VALUES (2, 230); 
    INSERT INTO public.integration_services_countries VALUES (2, 231); 
    INSERT INTO public.integration_services_countries VALUES (2, 232); 
    INSERT INTO public.integration_services_countries VALUES (1, 232); 
    INSERT INTO public.integration_services_countries VALUES (2, 233); 
    INSERT INTO public.integration_services_countries VALUES (1, 233); 
    INSERT INTO public.integration_services_countries VALUES (2, 234); 
    INSERT INTO public.integration_services_countries VALUES (1, 234); 
    INSERT INTO public.integration_services_countries VALUES (2, 235);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM public.integration_services_countries;
    `);
  }
}

import { Country } from '@common/database/entities';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Country]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>(`JWT_CONFIG.primarySecret`),
                signOptions: {
                    expiresIn: configService.get<string>(`JWT_CONFIG.expiresIn`),
                },
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [CountriesController],
    providers: [CountriesService],
    exports: [CountriesService]
})
export class CountriesModule { }

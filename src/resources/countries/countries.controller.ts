import { Country } from '@common/database/entities';
import { CheckTokenGuard } from '@common/guards';

import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CountriesService } from './countries.service';

@Controller('/countries')
@ApiTags('Countries')
@ApiBearerAuth()
export class CountriesController {

    constructor(
        private readonly _countriesService: CountriesService
    ) { }

    @Get('/')
    @ApiOperation({
        summary: 'This API aimed to get the countries list.',
    })
    @UseGuards(CheckTokenGuard)
    public findAll(): Promise<Country[]> {
        return this._countriesService.findAll();
    }
}
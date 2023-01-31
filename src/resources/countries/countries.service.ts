import { Country } from '@common/database/entities';

import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country)
    private readonly _countriesRepository: Repository<Country>,
  ) {}

  @Transactional()
  findAll(): Promise<Country[]> {
    return this._countriesRepository.find();
  }

  findById(id: number): Promise<Country> {
    return this._countriesRepository.findOneBy({ id });
  }
}

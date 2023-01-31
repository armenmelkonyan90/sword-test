import { Country, IntegrationServiceStatus } from './';

import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { IntegrationServiesEnum, IntegrationServiceTypes } from '../../enums';
import { BaseEntity } from '../base';

import { Exclude } from 'class-transformer';

@Entity()
export class IntegrationServices extends BaseEntity {

  @Column({
    type: 'enum',
    name: 'name',
    nullable: false,
    enum: IntegrationServiesEnum,
  })
  name: IntegrationServiesEnum;

  @Column({
    type: 'enum',
    enum: IntegrationServiceTypes,
    nullable: false,
  })
  type: IntegrationServiceTypes;

  @Column({ nullable: true })
  priority: number;

  @OneToMany(
    () => IntegrationServiceStatus,
    (integrationServiceStatus) => integrationServiceStatus.integrationService,
    {
      nullable: true,
    },
  )
  @ApiProperty()
  integrationServiceStatus: IntegrationServiceStatus[];

  @ManyToMany(() => Country, (country) => country.integrations)
  @JoinTable({
    name: 'integration_services_countries',
    inverseJoinColumn: {
      name: 'country_id',
    },
    joinColumn: {
      name: 'integration_service_id',
    },
  })
  @ApiHideProperty()
  @Exclude()
  countries: Country[];
}

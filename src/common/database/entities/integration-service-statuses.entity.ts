import { User, IntegrationServices } from './';
import { Exclude } from 'class-transformer';

import { ApiHideProperty } from '@nestjs/swagger';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import { IntegrationServieStatusEnum } from '../../enums';

import { BaseEntity } from '../base';

@Entity()
export class IntegrationServiceStatus extends BaseEntity {
  @Exclude()
  @OneToOne(() => User, (user) => user.integrationServiceStatus, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @ApiHideProperty()
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Exclude()
  @ManyToOne(
    () => IntegrationServices,
    (integrationService) => integrationService.integrationServiceStatus,
    {
      nullable: false,
    },
  )
  @ApiHideProperty()
  @JoinColumn({ name: 'integration_service_id' })
  integrationService: IntegrationServices;

  @Column({
    type: 'enum',
    nullable: false,
    enum: IntegrationServieStatusEnum,
    default: IntegrationServieStatusEnum.INITIAL,
  })
  status: IntegrationServieStatusEnum;

  @ApiHideProperty()
  @Exclude()
  @Column({ name: 'reffernce_id', type: 'varchar', nullable: true })
  reffernceId: string;
}

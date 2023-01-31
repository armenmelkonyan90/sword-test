import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

import { User } from './';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import {
  ActivivityLogsTypeEnum,
  ActivivityLogsCodeEnum,
  IsVisibleEnum,
} from '../../enums';

import { BaseEntity } from '../base';

@Entity()
export class ActivityLogs extends BaseEntity {
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  description: string;

  @Column({
    length: 50,
    nullable: false,
    default: 'Unknown',
    name: 'ip_address',
    type: 'varchar',
  })
  @ApiProperty()
  ipAddress = 'Unknown';

  @Column({
    length: 255,
    nullable: true,
    type: 'varchar',
    default: 'Unknown',
  })
  @ApiProperty()
  location = 'Unknown';

  @Column({ length: 50, nullable: false, type: 'varchar', default: 'Web' })
  @ApiProperty()
  device = 'Web';

  @Column({
    length: 50,
    nullable: false,
    default: 'Unknown',
    name: 'os_version',
    type: 'varchar',
  })
  @ApiProperty()
  osVersion = 'Unknown';

  @Column({
    type: 'enum',
    enum: ActivivityLogsTypeEnum,
    nullable: true,
    name: 'resource_type',
  })
  @ApiProperty()
  resourceType: ActivivityLogsTypeEnum;

  @Column({
    type: 'enum',
    enum: ActivivityLogsCodeEnum,
    nullable: true,
    name: 'resource_code',
  })
  @ApiProperty()
  resourceCode: ActivivityLogsCodeEnum;

  @Column({ nullable: true, name: 'resource_id' })
  resourceId: number;

  @Column({
    type: 'enum',
    enum: IsVisibleEnum,
    default: IsVisibleEnum.VISIBLE,
    name: 'is_visible',
  })
  @ApiProperty()
  isVisible: IsVisibleEnum;

  @ManyToOne(() => User, (user) => user.activityLogs, {
    onDelete: 'CASCADE',
  })
  @ApiHideProperty()
  @JoinColumn({ name: 'user_id' })
  user: User;
}

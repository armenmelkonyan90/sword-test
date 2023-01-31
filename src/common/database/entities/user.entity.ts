import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

import {
  VerificationCodes,
  ActivityLogs,
  IntegrationServiceStatus,
  MediaFiles,
  Country,
} from './';

import { Exclude } from 'class-transformer';

import { UserType } from '../../enums';
import { BaseEntity } from '../base';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  @Exclude()
  @ApiHideProperty()
  id: number;

  @Column({ length: 50, name: 'first_name' })
  @ApiProperty()
  firstName: string;

  @Column({ length: 50, name: 'last_name' })
  @ApiProperty()
  lastName: string;

  @Column({ length: 20 })
  @ApiProperty()
  phone: string;

  @Column({ length: 100, nullable: true })
  @ApiProperty()
  email: string;

  @Exclude()
  @Column({ length: 255, nullable: true })
  @ApiHideProperty()
  password: string;

  @Column({ length: 100 })
  @ApiProperty()
  username: string;

  @Column({
    type: 'enum',
    enum: UserType,
    nullable: false,
    name: 'type',
    default: UserType.PERSONAL,
  })
  @ApiProperty()
  type: UserType;

  @Column({ type: 'date' })
  @ApiProperty()
  birthday: string;

  @ApiHideProperty()
  @Exclude()
  @Column({ name: 'customer_id', type: 'uuid' })
  customerId: string;

  @OneToMany(() => VerificationCodes, (code) => code.user)
  @ApiHideProperty()
  verificationCodes: VerificationCodes[];

  @OneToMany(() => ActivityLogs, (activityLogs) => activityLogs.user, {
    nullable: true,
  })
  @ApiHideProperty()
  activityLogs: ActivityLogs[];

  @OneToOne(
    () => IntegrationServiceStatus,
    (integrationServiceStatus) => integrationServiceStatus.user,
    {
      nullable: true,
    },
  )
  @ApiProperty()
  integrationServiceStatus: IntegrationServiceStatus;

  @OneToOne(() => MediaFiles, {
    nullable: true,
  })
  @JoinColumn({
    name: 'avatar_id',
  })
  @ApiProperty()
  avatar: MediaFiles;

  @ManyToOne(() => Country, {
    nullable: false,
  })
  @JoinColumn({
    name: 'country_id',
  })
  @ApiProperty()
  country: Country;
}

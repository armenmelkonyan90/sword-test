import { Exclude } from 'class-transformer';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';

import { User } from './user.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '../base';

@Entity()
export class VerificationCodes extends BaseEntity {
  @Exclude()
  @ManyToOne(() => User, (user) => user.verificationCodes, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @ApiHideProperty()
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'uuid', name: 'customer_id', nullable: true })
  @ApiProperty()
  customerId: string;

  @Exclude()
  @Column({ length: 4, type: 'varchar' })
  @ApiHideProperty()
  code: string;

  @Column({ default: false, name: 'is_used' })
  @ApiProperty()
  isUsed: boolean;
}

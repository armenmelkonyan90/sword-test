import { Exclude } from 'class-transformer';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseEntity } from '../base';

@Entity()
export class Customers extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Exclude()
  @Column({ name: 'customer_id', type: 'uuid' })
  customerId: string;

  @Column({ length: 20 })
  phone: string;
}

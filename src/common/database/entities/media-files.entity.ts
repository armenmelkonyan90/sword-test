import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseEntity } from '../base';

@Entity()
export class MediaFiles extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiHideProperty()
  @Exclude()
  id: number;

  @Column({ length: 255, type: 'varchar' })
  path: string;
}

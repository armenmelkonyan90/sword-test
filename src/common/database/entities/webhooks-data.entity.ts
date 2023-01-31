import {
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

import { BaseEntity } from "../base";

@Entity('webhooks_data_temp')
export class WebhooksDataTemp extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'temp_data'
    })
    tempData: string;
}
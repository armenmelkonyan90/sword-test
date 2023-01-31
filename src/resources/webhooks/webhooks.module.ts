import { WebhooksDataTemp } from '@common/database/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';

@Module({
    imports: [TypeOrmModule.forFeature([WebhooksDataTemp])],
    controllers: [WebhooksController],
    providers: [WebhooksService]
})
export class WebhooksModule { }

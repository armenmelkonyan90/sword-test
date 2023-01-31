import { WebhooksDataTemp } from '@common/database/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WebhooksService {

    constructor(
        @InjectRepository(WebhooksDataTemp)
        private _webhooksDataTempRepository: Repository<WebhooksDataTemp>
    ) { }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async saveData(data: any) {
        await this._webhooksDataTempRepository.save({
            tempData: JSON.stringify(data)
        });
    }
}

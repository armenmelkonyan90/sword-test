import { buildResponse } from '@common/helpers';
import { Body, Controller, Post } from '@nestjs/common';

import { WebhooksService } from './webhooks.service';


@Controller('/webhooks')
export class WebhooksController {

    constructor(
        private readonly _webhooksService: WebhooksService
    ) { }

    @Post('/integrations/intergiro')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public async ingetrationsWebhookHandller(@Body() data: any) {
        console.log('data', data);
        await this._webhooksService.saveData(data || {});
        return buildResponse(true);
    }
}
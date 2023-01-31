import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { IntergiroService } from './integrations';
import { FiatService } from './fiat.service';

@Module({
    imports: [HttpModule],
    providers: [
        FiatService,
        IntergiroService
    ],
    exports: [FiatService]
})
export class FiatModule { }

import { Module } from '@nestjs/common';
import { SenderService } from './sender.service';

@Module({
  imports: [],
  providers: [SenderService],
  exports: [SenderService]
})
export class SenderModule { }

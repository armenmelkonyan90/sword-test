import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { CronService } from './cron.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([]),
  ],
  providers: [CronService],
})
export class CronModule { }

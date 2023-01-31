import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLogsController } from './activity-logs.controller';

import { ActivityLogsService } from './activity-logs.service';

import * as ENTITIES from '@common/database/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ENTITIES.User,
      ENTITIES.VerificationCodes,
      ENTITIES.ActivityLogs,
    ]),
  ],
  controllers: [ActivityLogsController],
  providers: [ActivityLogsService],
})
export class ActivityLogsModule {}

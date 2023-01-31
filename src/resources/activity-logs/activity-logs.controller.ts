/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthUser } from '@common/decorators/user.decorator';
import { PaginationQueryDTO } from '@common/dtos/pagination-query.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { ActivityLogsService } from './activity-logs.service';
import * as LOGS_DTO from './dto';

import { ITokenPayload } from '@common/models';

@ApiTags('Activity Logs')
@Controller('activity-logs')
@ApiBearerAuth()
export class ActivityLogsController {
  constructor(private readonly activityLogsService: ActivityLogsService) { }

  // @Get()
  // @ApiOperation({
  //   summary: 'This API aimed to get users activity logs.',
  // })
  // @ApiOkResponse({
  //   type: [LOGS_DTO.ActivityLogsResponseDTO],
  // })
  // async getUserLogs(
  //   @AuthUser() user: ITokenPayload,
  //   @Query() query: PaginationQueryDTO,
  // ): Promise<LOGS_DTO.ActivityLogsResponseDTO[]> {
  //   return this.activityLogsService.getUserLogs(user, query);
  // }
}

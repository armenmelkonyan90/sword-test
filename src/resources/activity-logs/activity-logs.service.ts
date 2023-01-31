import { buildResponse } from '@common/helpers';

import _, { isEmpty } from 'lodash';

import { QB_LOGS } from '@common/database/constants/query-builder-tables';

import { PaginationQueryDTO } from '@common/dtos/pagination-query.dto';

import { ActivityLogInfoDTO } from './dto/activity-log-info.dto';
import * as LOGS_DTO from './dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import * as ENTITIES from '@common/database/entities';
import { Repository } from 'typeorm';

import Sniffr from 'sniffr';
import { format } from 'date-fns';
import { ITokenPayload } from '@common/models';

import { Transactional } from 'typeorm-transactional';

@Injectable()
export class ActivityLogsService {
  private readonly requestDetector = new Sniffr();

  constructor(
    @InjectRepository(ENTITIES.ActivityLogs)
    private readonly activityLogsRepository: Repository<ENTITIES.ActivityLogs>,
  ) {}

  getIpAdress(req: Request & { userIpAddress: string }): string {
    const ipAddress: string =
      req.userIpAddress && req.userIpAddress !== '::1'
        ? req.userIpAddress
        : (req.headers['x-forwarded-for'] || '')?.split(',')?.pop()?.trim();

    return ipAddress;
  }

  async getLogInfo(
    req: Request & { userIpAddress: string },
  ): Promise<ActivityLogInfoDTO> {
    const { headers } = req;
    if (isEmpty(headers)) return {} as ActivityLogInfoDTO;

    const sniffrInfo: LOGS_DTO.SniffrInfoInterface = this.requestDetector.sniff(
      headers['user-agent'],
    );
    const device =
      sniffrInfo.device.name != 'Unknown' ? sniffrInfo.device.name : 'Web';
    const osVersion = sniffrInfo.os.name;

    const ipAddress: string = this.getIpAdress(req);

    // TODO
    const location = '';

    const logInfo: ActivityLogInfoDTO = {
      ipAddress: ipAddress && ipAddress.length ? ipAddress : 'Unknown',
      location,
      device,
      osVersion,
    };

    return logInfo;
  }

  @Transactional()
  async getUserLogs(
    user: ITokenPayload,
    query: PaginationQueryDTO,
  ): Promise<LOGS_DTO.ActivityLogsResponseDTO[]> {
    const { offset, limit } = query;
    const { id } = user;
    const activityLogs: ENTITIES.ActivityLogs[] =
      await this.activityLogsRepository
        .createQueryBuilder(QB_LOGS)
        .where(`${QB_LOGS}.user_id = :user_id`)
        .andWhere(`${QB_LOGS}.is_visible = '1'`)
        .orderBy(`${QB_LOGS}.created_at`, 'DESC')
        .skip(offset)
        .take(limit)
        .setParameters({ user_id: id })
        .getMany();

    const result: LOGS_DTO.ActivityLogsResponseDTO[] = _(activityLogs)
      .groupBy(function (i) {
        return format(new Date(i.createdAt), 'MMMM dd,yyyy');
      })
      .map(function (items, date) {
        return {
          date,
          items,
        };
      })
      .value();

    return buildResponse(true, result);
  }

  async create(
    user_id: number,
    createActivityLogDTO: LOGS_DTO.CreateActivityLogDTO,
    req: Request & { userIpAddress: string } = {} as Request & {
      userIpAddress: string;
    },
  ): Promise<void> {
    const logInfo: ActivityLogInfoDTO = await this.getLogInfo(req);

    try {
      await this.activityLogsRepository.save({
        ...createActivityLogDTO,
        ...logInfo,
        user_id,
      });
    } catch (e) {
      const description = `Invalid log.`;
      await this.activityLogsRepository.save({
        description,
        ...logInfo,
        user_id,
      });
    }
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';

import { UrlDTO } from './dto';
import { UsersService } from '../user';

import {
  IntegrationServiceTypes,
  IntegrationServieStatusEnum,
} from '@common/enums';
import {
  IntegrationServices,
  IntegrationServiceStatus,
  User,
} from '@common/database/entities';

import { ITokenPayload } from '@common/models';
import { TABLE_ALIASES as TA } from '@common/queries';
import { buildResponse } from '@common/helpers';
import { ERROR_MESSAGES } from '@common/messages';

import { FiatService } from '@shared/fiat';
import {
  ICreateIndividualBody,
  IIndividualOnBoardBody,
} from '@shared/fiat/models';
import { ConfigService } from '@nestjs/config';

import { Transactional } from 'typeorm-transactional';

@Injectable()
export class IntegrationsService {
  constructor(
    @InjectRepository(IntegrationServices)
    private readonly _integrationServicesRepository: Repository<IntegrationServices>,
    @InjectRepository(IntegrationServiceStatus)
    private readonly _integrationServiceStatusRepository: Repository<IntegrationServiceStatus>,

    private _usersService: UsersService,
    private _fiatSerivce: FiatService,
    private _configService: ConfigService,
  ) { }

  @Transactional()
  async findAll(userPayload: ITokenPayload): Promise<IntegrationServices[]> {
    const user = await this._usersService.getUserProfile(userPayload);
    return this._integrationServicesRepository
      .createQueryBuilder(TA.INTEGRATION_SERVICES)
      .innerJoin(`${TA.INTEGRATION_SERVICES}.countries`, TA.COUNTRIES)
      .leftJoinAndSelect(
        `${TA.INTEGRATION_SERVICES}.integrationServiceStatus`,
        TA.INTEGRATION_SERVICE_STATUSES,
        `${TA.INTEGRATION_SERVICE_STATUSES}.user_id = :userId`,
        { userId: user.id },
      )
      .where(`${TA.COUNTRIES}.id = :countryId`, { countryId: user.country.id })
      .getMany();
  }

  async findIntegrationById(id: number): Promise<IntegrationServices> {
    return this._integrationServicesRepository.findOneBy({ id });
  }

  async findUserNextKYCVerificationService(
    userPayload: ITokenPayload,
  ): Promise<IntegrationServices> {
    const user = await this._usersService.getUserProfile(userPayload);
    return (
      this._integrationServicesRepository
        .createQueryBuilder(TA.INTEGRATION_SERVICES)
        .innerJoin(`${TA.INTEGRATION_SERVICES}.countries`, TA.COUNTRIES)
        .leftJoinAndSelect(
          `${TA.INTEGRATION_SERVICES}.integrationServiceStatus`,
          TA.INTEGRATION_SERVICE_STATUSES,
          `${TA.INTEGRATION_SERVICE_STATUSES}.user_id = :userId`,
          { userId: user.id },
        )
        .where(`${TA.COUNTRIES}.id = :countryId`, {
          countryId: user.country.id,
        })
        .andWhere(
          `${TA.INTEGRATION_SERVICE_STATUSES}.status IS NULL OR ${TA.INTEGRATION_SERVICE_STATUSES}.status = ANY(:status)`,
          {
            status: [
              IntegrationServieStatusEnum.BLOCKED,
              IntegrationServieStatusEnum.INITIAL,
            ],
          },
        )
        .orderBy(`${TA.INTEGRATION_SERVICES}.priority`, 'ASC')
        // In Case the priority number is not specified in the database.
        .orderBy(`${TA.INTEGRATION_SERVICES}.id`, 'ASC')
        .getOne()
    );
  }

  @Transactional()
  async getKYCVerificationURL(userPayload: ITokenPayload): Promise<UrlDTO> {
    const nextIntegrationService =
      await this.findUserNextKYCVerificationService(userPayload);

    if (!nextIntegrationService) {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.KYC_VERIFICATION_NOT_EXISTS,
      );
    }

    const { id, integrationServiceStatus } = nextIntegrationService;

    const integrationService = await this.findIntegrationById(id);

    if (!integrationService) {
      throw buildResponse(
        false,
        null,
        ERROR_MESSAGES.INVALID_INTEGRATION_SERVICE_ID,
      );
    }

    const user = await this._usersService.getUserProfile(userPayload);

    if (integrationService.type === IntegrationServiceTypes.FIAT) {
      let [{ reffernceId }] = integrationServiceStatus.length ? integrationServiceStatus : [{ reffernceId: null }];
      try {
        await this._fiatSerivce.authorize();
        const individualData: ICreateIndividualBody = {
          email: user.email,
          date_of_birth: user.birthday.toString(),
          first_name: user.firstName,
          last_name: user.lastName,
          phone_number: user.phone,
        };

        //To DO Remove in Staging/Production modes
        const allIndividuals = await this._fiatSerivce.listAllIndividuals();
        if (!reffernceId) {
          const individual = allIndividuals.find((e) => e.email === user.email);
          if (individual) {
            reffernceId = individual.id;
          }
        }

        const individualId: string =
          reffernceId ??
          (await this._fiatSerivce.createIndividual(individualData)).id;

        if (!reffernceId) {
          await this._integrationServiceStatusRepository.update(
            {
              user,
              integrationService,
            },
            {
              reffernceId: individualId,
            },
          );
        }

        const onBoardData: IIndividualOnBoardBody = {
          id: individualId,
          return_url: this._configService.get('INTERGIRO_KYC_REDIRECT_URL'),
        };
        const onBoard = await this._fiatSerivce.onBoardIndividual(onBoardData);
        return buildResponse(true, {
          redirectUrl: onBoard.redirect_url,
        });
      } catch (error) {
        console.log(error);
        return buildResponse(false, null, {
          message: `err_${error?.response?.data?.errors?.[0]?.code}`,
        });
      }
    }
    return {} as UrlDTO;
  }

  async findUsersService(
    id: number,
    user: ITokenPayload,
  ): Promise<IntegrationServiceStatus> {
    return this._integrationServiceStatusRepository.findOne({
      where: {
        integrationService: {
          id,
        },
        user: {
          id: user.id,
        },
      },
    });
  }

  async insertIntegrationServices(user: User): Promise<void> {
    const integrationServices = await this._integrationServicesRepository
      .createQueryBuilder(TA.INTEGRATION_SERVICES)
      .innerJoin(`${TA.INTEGRATION_SERVICES}.countries`, TA.COUNTRIES)
      .leftJoinAndSelect(
        `${TA.INTEGRATION_SERVICES}.integrationServiceStatus`,
        TA.INTEGRATION_SERVICE_STATUSES,
        `${TA.INTEGRATION_SERVICE_STATUSES}.user_id = :userId`,
        { userId: user.id },
      )
      .where(`${TA.COUNTRIES}.id = :countryId`, {
        countryId: user.country.id,
      })
      .andWhere(`${TA.INTEGRATION_SERVICE_STATUSES}.status IS NULL`)
      .getMany();

    await this._integrationServiceStatusRepository
      .createQueryBuilder()
      .insert()
      .into(IntegrationServiceStatus)
      .values(
        integrationServices.map((integrationService) => ({
          user,
          integrationService,
        })),
      )
      .execute();
  }
}

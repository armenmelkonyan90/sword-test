import { ERROR_MESSAGES } from '@common/messages';

import { InjectRepository } from '@nestjs/typeorm';

import { MessageSuccessDTO } from '@common/dtos';
import { SenderService } from '@shared/sender';

import { VerificationCodes } from '@common/database/entities';

import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getRandomCode } from '@common/helpers/get-random-code';
import { DEFAULT_CONST } from '@common/constants';

import { differenceInMinutes } from 'date-fns';

import { isEmpty } from 'lodash';

import { ICheckVerificationCode } from '@common/models';

import { buildResponse } from '@common/helpers';

@Injectable()
export class VerificationCodesService {
  constructor(
    @InjectRepository(VerificationCodes)
    private readonly codeRepository: Repository<VerificationCodes>,
    private readonly _senderService: SenderService,
  ) {}

  async generateAndSaveCodeBycustomerId(customerId: string): Promise<string> {
    const code = '1234'; // Temprorary hardcoded the verification code getRandomCode();

    await this.codeRepository.save({ customerId, code });
    return code;
  }

  async generateAndSaveCodeByid(id: number): Promise<string> {
    const code = '1234'; // Temprorary hardcoded the verification code getRandomCode();
    await this.codeRepository.save({ user: { id }, code });
    return code;
  }

  async sendSmsAndSaveByCustomerId(
    customerId: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    phone: string,
  ): Promise<ICheckVerificationCode> {
    const code: string = await this.generateAndSaveCodeBycustomerId(customerId);

    // await this._senderService.sendSMSToPhone(
    //   phone,
    //   `Verification Code: ${code}`,
    // );

    return { code };
  }

  async sendSmsAndSaveById(
    id: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    phone: string,
  ): Promise<ICheckVerificationCode> {
    const code: string = await this.generateAndSaveCodeByid(id);

    // await this._senderService.sendSMSToPhone(
    //   phone,
    //   `Verification Code: ${code}`,
    // );

    return { code };
  }

  async deactivateUsersCode(id: number): Promise<void> {
    await this.codeRepository.update(
      {
        user: {
          id: id,
        },
      },
      {
        isUsed: true,
      },
    );
  }

  async deactivateCustomerIdCode(customerId: string): Promise<void> {
    await this.codeRepository.update(
      {
        customerId: customerId,
      },
      {
        isUsed: true,
      },
    );
  }

  async checkUserVerificationCode(
    id: number,
    code: string,
  ): Promise<MessageSuccessDTO> {
    const lastVerificationCode = await this.codeRepository.findOne({
      where: {
        isUsed: false,
        user: {
          id: id,
        },
      },
      order: { createdAt: 'DESC' },
    });

    if (isEmpty(lastVerificationCode)) {
      throw buildResponse(false, null, ERROR_MESSAGES.CODE_NOT_EXISTS);
    }

    // Calculate retrieved code lifetime
    const messageLifetime = differenceInMinutes(
      new Date(),
      lastVerificationCode.createdAt,
    );

    if (messageLifetime > DEFAULT_CONST.CODE_LIFE_TIME_ENDS) {
      await this.codeRepository.update(
        { user: { id: id } },
        {
          isUsed: true,
        },
      );
      throw buildResponse(false, null, ERROR_MESSAGES.CODE_LIFE_TIME_ENDS);
    }

    if (lastVerificationCode.code != code) {
      throw buildResponse(false, null, ERROR_MESSAGES.CODE_INVALID);
    } else {
      await this.deactivateUsersCode(id);
      return buildResponse(true, {
        success: true,
      });
    }
  }

  async checkCustomerIdVerificationCode(
    customerId: string,
    code: string,
  ): Promise<MessageSuccessDTO> {
    const lastVerificationCode = await this.codeRepository.findOne({
      where: {
        isUsed: false,
        customerId: customerId,
      },
      order: { createdAt: 'DESC' },
    });

    if (isEmpty(lastVerificationCode)) {
      throw buildResponse(false, null, ERROR_MESSAGES.CODE_NOT_EXISTS);
    }

    // Calculate retrieved code lifetime
    const messageLifetime = differenceInMinutes(
      new Date(),
      lastVerificationCode.createdAt,
    );

    if (messageLifetime > DEFAULT_CONST.CODE_LIFE_TIME_ENDS) {
      await this.codeRepository.update(
        { customerId: customerId },
        {
          isUsed: true,
        },
      );
      throw buildResponse(false, null, ERROR_MESSAGES.CODE_LIFE_TIME_ENDS);
    }

    if (lastVerificationCode.code != code) {
      throw buildResponse(false, null, ERROR_MESSAGES.CODE_INVALID);
    } else {
      await this.deactivateCustomerIdCode(customerId);
      return buildResponse(true, {
        success: true,
      });
    }
  }
}

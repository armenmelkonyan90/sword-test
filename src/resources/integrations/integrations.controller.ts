import { Controller, Get, UseGuards } from '@nestjs/common';

import { IntegrationsService } from './integrations.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthUserGuard } from '@common/guards';

import { IntegrationServices } from '@common/database/entities';

import { UrlDTO } from './dto';
import { AuthUser } from '@common/decorators';

import { ITokenPayload } from '@common/models';

@ApiBearerAuth()
@Controller('integrations')
@ApiTags('Integrations')
@UseGuards(AuthUserGuard)
export class IntegrationsController {
  constructor(private readonly _integrationsService: IntegrationsService) {}

  @Get()
  @ApiOperation({
    summary: `This API returns all services`,
  })
  async findAll(
    @AuthUser() user: ITokenPayload,
  ): Promise<IntegrationServices[]> {
    return this._integrationsService.findAll(user);
  }

  @Get('kyc-verification')
  @ApiOperation({
    summary: `This API returns redirect URL for the integration service.`,
  })
  async getKYCVerification(@AuthUser() user: ITokenPayload): Promise<UrlDTO> {
    return this._integrationsService.getKYCVerificationURL(user);
  }
}

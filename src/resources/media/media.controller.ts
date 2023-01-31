import { AuthUserGuard } from '@common/guards';

import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { GetPresignedUrlDTO, UrlResponseDTO } from './dto';

import { MediaService } from './media.service';
import { AuthUser } from '@common/decorators';

@Controller('media')
@ApiTags('Media')
@ApiBearerAuth()
@UseGuards(AuthUserGuard)
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get('presigned-url')
  @ApiOperation({
    summary: `This API aimed to generate a presigned URL.`,
  })
  async findAll(
    @Query() query: GetPresignedUrlDTO,
    @AuthUser('customerId') customerId: string,
  ): Promise<UrlResponseDTO> {
    return this.mediaService.getPresignedUrl(customerId, query);
  }
}

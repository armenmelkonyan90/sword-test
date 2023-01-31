import { MediaFiles } from '@common/database/entities';

import { IAws } from '@common/models';

import { ConfigService } from '@nestjs/config';

import { IGetPresignedUrl, IPath } from '@common/models';

import { buildResponse } from '@common/helpers';

import { Injectable } from '@nestjs/common';

import { AwsS3Service } from '@shared/s3/aws-s3.service';

import { ERROR_MESSAGES } from '@common/messages';

import { ACCEPTED_FILE_TYPES } from '@common/constants';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MediaService {
  private awsS3Service: AwsS3Service;
  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(MediaFiles)
    private readonly _mediaFilesRepository: Repository<MediaFiles>,
  ) {
    const { bucket } = this.configService.get<IAws>('AWS_CONFIG');
    this.awsS3Service = new AwsS3Service(bucket, 600);
  }

  async getPresignedUrl(customerId: string, body: IGetPresignedUrl) {
    try {
      const { extenstion, fileType, contentType } = body;

      const { accpetedContentType, accpetedExtension } =
        ACCEPTED_FILE_TYPES[fileType];

      if (!accpetedContentType.includes(contentType)) {
        throw buildResponse(
          false,
          null,
          ERROR_MESSAGES.UNACCEPTABLE_CONTENT_TYPE,
        );
      }

      if (!accpetedExtension.includes(extenstion)) {
        throw buildResponse(
          false,
          null,
          ERROR_MESSAGES.UNACCEPTABLE_EXTENSTION,
        );
      }

      const { url } = await this.awsS3Service.getSignedUrlToPutObject(
        `${customerId}/${fileType}.${extenstion}`,
        contentType,
      );

      return buildResponse(true, { url });
    } catch (e) {
      throw buildResponse(false, null, {
        message: e?.response?.message ?? [ERROR_MESSAGES.UNKNOWN_ERROR],
      });
    }
  }

  async create(mediaFile: IPath): Promise<MediaFiles> {
    return this._mediaFilesRepository.save(mediaFile);
  }
}

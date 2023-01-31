import { IGetPresignedUrl } from '@common/models';
import { Extension, MediaFileUploadType } from '@common/enums';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class GetPresignedUrlDTO implements IGetPresignedUrl {
  @IsEnum(MediaFileUploadType)
  @IsNotEmpty()
  fileType: MediaFileUploadType = MediaFileUploadType.AVATAR;

  @IsEnum(Extension)
  @IsNotEmpty()
  extenstion: Extension;

  @IsString()
  @IsNotEmpty()
  contentType: string;
}

import { MediaFileUploadType, Extension } from '@common/enums';

export class IGetPresignedUrl {
  fileType: MediaFileUploadType;
  extenstion: Extension;
  contentType: string;
}

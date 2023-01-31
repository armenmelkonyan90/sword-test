import { MediaFileUploadType } from '@common/enums';

export type S3AcceptedFileTypes = {
  [key in MediaFileUploadType]: {
    accpetedContentType: string[];
    accpetedExtension: string[];
  };
};

import { MediaFileUploadType } from '@common/enums';
import { S3AcceptedFileTypes } from '@common/models';

export const ACCEPTED_FILE_TYPES: S3AcceptedFileTypes = {
  [MediaFileUploadType.AVATAR]: {
    accpetedContentType: ['image/jpeg', 'image/png', 'image/jpg'],
    accpetedExtension: ['jpeg', 'jpg', 'png'],
  },
};

import { registerAs } from '@nestjs/config';

import { IAws } from '@common/models';

export default registerAs(
  'AWS_CONFIG',
  (): IAws => {
    const awsObJ: IAws = {
      bucket: process.env.AWS_BUCKET_NAME,
    };
    if (process.env?.ENVIRONMENT !== 'AWS') {
      awsObJ.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
      awsObJ.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    }
    return awsObJ;
  },
);

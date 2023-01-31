import { S3, config } from 'aws-sdk';

export function getS3() {
  config.update({
    signatureVersion: 'v4',
    region: 'eu-west-2',
  });
  if (process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'AWS') {
    return new S3();
  } else {
    return new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }
}

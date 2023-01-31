import { config, SNS } from 'aws-sdk';

export function getSNS(): SNS {
  config.update({ region: 'eu-west-2' });
  if (process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'AWS') {
    return new SNS({});
  } else {
    const sns = new SNS({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    return sns;
  }
}

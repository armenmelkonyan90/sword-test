import { config, SESV2 } from 'aws-sdk';

export function getSES(): SESV2 {
  config.update({ region: 'eu-west-2' });
  if (process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'AWS') {
    return new SESV2({});
  } else {
    const ses = new SESV2({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    return ses;
  }
}

import { config, Lambda } from 'aws-sdk';

export function getLambda() {
  config.update({ region: 'eu-west-2' });
  if (process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'AWS') {
    return new Lambda({});
  } else {
    const lambda = new Lambda({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    return lambda;
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException } from '@nestjs/common';

import { IGetSignedURLRes } from './models';
import { getS3 } from './s3';

import { S3 } from 'aws-sdk';

export class AwsS3Service {
  bucket: string;
  signedUrlExpireSeconds: number;
  s3 = getS3();

  constructor(bucket: string, signedUrlExpireSeconds = 60) {
    this.bucket = bucket;
    this.signedUrlExpireSeconds = signedUrlExpireSeconds;
  }

  async getSignedUrlToPutObject(
    keyName: string,
    contentType: string,
  ): Promise<IGetSignedURLRes> {
    let success = true;
    const signedUrl = new Promise((resolve, reject) => {
      this.s3.getSignedUrl(
        'putObject',
        {
          Bucket: this.bucket,
          Key: keyName,
          Expires: this.signedUrlExpireSeconds,
          ContentType: contentType,
        },
        function (err, newUrl) {
          if (err) {
            success = false;
            reject(err);
            throw new BadRequestException(err);
          } else {
            resolve(newUrl);
          }
        },
      );
    });

    const url = (await signedUrl) as string;

    return {
      success,
      url,
    };
  }

  async getSignedUrlToGetObject(keyName: string): Promise<IGetSignedURLRes> {
    if (keyName.startsWith(`https://`)) {
      return { success: true, url: keyName };
    }
    let success = true;
    const signedUrl = new Promise((resolve, reject) => {
      this.s3.getSignedUrl(
        'getObject',
        {
          Bucket: this.bucket,
          Key: keyName,
          Expires: this.signedUrlExpireSeconds,
        },
        function (err, newUrl) {
          if (err) {
            success = false;
            reject(err);
            throw new BadRequestException(err);
          } else {
            resolve(newUrl);
          }
        },
      );
    });

    const url = (await signedUrl) as string;

    return {
      success,
      url,
    };
  }

  async uploadS3(
    file: Buffer | string,
    name: string,
  ): Promise<S3.ManagedUpload.SendData> {
    const s3 = getS3();
    const params = {
      Bucket: this.bucket,
      Key: `${name}`,
      Body: file,
    };
    return s3
      .upload(params)
      .promise()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  }

  async getS3File(keyName: string): Promise<S3.Body> {
    return new Promise((resolve, reject) => {
      this.s3.getObject(
        { Key: keyName, Bucket: this.bucket },
        function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data.Body);
          }
        },
      );
    });
  }

  async headS3File(keyName: string): Promise<S3.Body> {
    return new Promise((resolve, reject) => {
      this.s3.headObject(
        { Key: keyName, Bucket: this.bucket },
        function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        },
      );
    });
  }

  async checkFileExists(keyName: string): Promise<boolean> {
    return new Promise((resolve, _reject) => {
      this.s3.headObject(
        { Key: keyName, Bucket: this.bucket },
        function (err, _data) {
          if (err) {
            resolve(false);
          } else {
            resolve(true);
          }
        },
      );
    });
  }

  async deleteS3File(
    keyName: string,
  ): Promise<void | S3.DeleteObjectOutput | AWS.AWSError> {
    const params = {
      Bucket: this.bucket,
      Key: `${keyName}`,
    };
    return this.s3
      .deleteObject(params)
      .promise()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  }

  async sizeOf(keyName: string): Promise<number> {
    return this.s3
      .headObject({ Key: keyName, Bucket: this.bucket })
      .promise()
      .then((res) => res.ContentLength);
  }
}

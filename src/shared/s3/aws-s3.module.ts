import { AwsS3Service } from './aws-s3.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [AwsS3Service],
  exports: [AwsS3Service],
})
export class AwsS3Module {}

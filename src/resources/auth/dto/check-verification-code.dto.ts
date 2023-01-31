import { ICheckVerificationCode } from '@common/models';

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CheckVerificationCodeDTO implements ICheckVerificationCode {
  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty()
  code: string;
}

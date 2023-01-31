import { ICheckEmail } from '@common/models';

import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CheckEmailDTO implements ICheckEmail {
  @MinLength(2)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;
}

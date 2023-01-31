import { IsPhoneNumberOrEmail } from '@common/decorators';

import { ILogin } from '@common/models';

import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class LoginDTO implements ILogin {
  @IsPhoneNumberOrEmail({
    message: 'Login should be an email or phone',
  })
  @IsNotEmpty()
  @ApiProperty()
  login: string;

  @IsString()
  @MinLength(4)
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}

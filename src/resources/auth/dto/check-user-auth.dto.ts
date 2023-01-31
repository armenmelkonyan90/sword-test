import { IsPhoneNumberOrEmail } from '@common/decorators';
import { ICheckUserAuth, ICheckUserAuthBody } from '@common/models';

import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CheckUserAuthBodyDTO implements ICheckUserAuthBody {
  @IsPhoneNumberOrEmail({
    message: 'Login should be an email or phone',
  })
  @IsNotEmpty()
  login: string;
}

export class CheckUserAuthDTO implements ICheckUserAuth {
  @IsBoolean()
  @IsNotEmpty()
  userExists: boolean;

  @IsString()
  accessToken?: string;

  @IsString()
  @IsOptional()
  code?: string;
}

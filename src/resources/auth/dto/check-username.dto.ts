import { ICheckUsername } from '@common/models';

import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class CheckUsernameDTO implements ICheckUsername {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  username: string;
}

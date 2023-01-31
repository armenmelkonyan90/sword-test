import { Match } from '@common/decorators';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class PasswordSetDTO {
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  @MinLength(6)
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsString()
  @Match('password')
  @MinLength(6)
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  passwordConfirm: string;
}

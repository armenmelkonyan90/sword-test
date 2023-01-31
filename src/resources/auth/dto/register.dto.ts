import { IRegister } from '@common/models/auth';

import { UserType } from '@common/enums';

import { IsAdult, IsDateFormat, Match } from '@common/decorators';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEnum,
  MaxLength,
  MinLength,
  IsPhoneNumber,
  IsEmail,
  Matches,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class RegisterDTO implements IRegister {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @MinLength(2)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsNumber()
  @IsNotEmpty()
  countryId: number;

  @IsAdult({
    message: 'The user should be adult.',
  })
  @IsDateFormat('MM/dd/yyyy', {
    message: 'Invalid Date Format',
  })
  @ApiProperty({
    format: 'MM/dd/yyyy',
    example: '01/30/2000',
  })
  @IsNotEmpty()
  birthday: string;

  @IsEnum(UserType)
  @IsNotEmpty()
  @ApiProperty()
  type: UserType;

  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  @MinLength(6)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @Match('password', { message: "Password doesn't match" })
  @MinLength(6)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  passwordConfirm: string;

  @ApiProperty({
    type: 'File',
    example: 'jpg|jpeg|png',
  })
  @IsOptional()
  avatar?: Express.Multer.File;
}

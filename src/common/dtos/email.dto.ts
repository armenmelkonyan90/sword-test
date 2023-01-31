import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class EmailDTO {
  @IsEmail()
  @ApiProperty()
  email: string;
}

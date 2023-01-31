import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class PhoneDTO {
  @IsPhoneNumber()
  @ApiProperty()
  @IsNotEmpty()
  phone: string;
}

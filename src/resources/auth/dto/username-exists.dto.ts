import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class UsernameExistsDTO {
  @IsBoolean()
  @ApiProperty()
  usernameExists: boolean;
}

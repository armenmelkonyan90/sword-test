import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class IdDTO {
  @IsNumber()
  @ApiProperty()
  id: number;
}

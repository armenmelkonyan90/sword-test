import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PaginationQueryDTO {
  @ApiProperty()
  @IsNumber()
  offset = 0;

  @ApiProperty()
  @IsNumber()
  limit = 100;
}

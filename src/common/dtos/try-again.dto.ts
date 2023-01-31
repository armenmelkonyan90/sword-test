import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class TryAgainDTO<T = null> {
  @ApiProperty()
  @IsBoolean()
  try_again: boolean;

  @ApiProperty()
  @IsOptional()
  data?: T = null;
}

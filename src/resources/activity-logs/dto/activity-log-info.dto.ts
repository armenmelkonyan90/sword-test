import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ActivityLogInfoDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  ipAddress = 'Unknown';

  @ApiProperty()
  @IsString()
  @IsOptional()
  location = 'Unknown';

  @ApiProperty()
  @IsString()
  @IsOptional()
  device = 'Web';

  @ApiProperty()
  @IsString()
  @IsOptional()
  osVersion = 'Unknown';
}

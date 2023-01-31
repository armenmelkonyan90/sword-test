import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import {
  ActivivityLogsTypeEnum,
  IsVisibleEnum,
  ActivivityLogsCodeEnum
} from '@common/enums';

export class CreateActivityLogDTO {
  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsEnum(IsVisibleEnum)
  isVisible?: IsVisibleEnum = IsVisibleEnum.INVISIBLE;

  @ApiProperty()
  @IsEnum(ActivivityLogsTypeEnum)
  resourceType?: ActivivityLogsTypeEnum;

  @ApiProperty()
  @IsEnum(ActivivityLogsCodeEnum)
  resourceCode?: ActivivityLogsCodeEnum;

  @ApiProperty()
  @IsNotEmpty()
  resourceId?: number;
}

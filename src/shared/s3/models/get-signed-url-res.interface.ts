import { ApiProperty } from '@nestjs/swagger';

export class IGetSignedURLRes {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  url: string;
}

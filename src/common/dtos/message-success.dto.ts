import { IMessageSuccess } from '@common/models';
import { ApiProperty } from '@nestjs/swagger';

export class MessageSuccessDTO implements IMessageSuccess {
  @ApiProperty()
  success: boolean;
}

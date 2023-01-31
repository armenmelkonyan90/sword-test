import { IsNotEmpty, IsUUID } from 'class-validator';
import { RegisterDTO } from '@resources/auth/dto/register.dto';

export class CreateUserDTO extends RegisterDTO {
  @IsUUID()
  @IsNotEmpty()
  customerId: string;
}

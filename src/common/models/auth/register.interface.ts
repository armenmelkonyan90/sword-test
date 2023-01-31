import { UserType } from '@common/enums';

export interface IRegister {
  firstName: string;
  lastName: string;
  username: string;
  birthday: string;
  type: UserType;
  phone: string;
  email: string;
}

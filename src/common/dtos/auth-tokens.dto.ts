import { IAuthTokens } from '@common/models/auth';

import { AccessTokenDTO } from './access-token.dto';

export class AuthTokensDTO extends AccessTokenDTO implements IAuthTokens {
  refreshToken: string;
}

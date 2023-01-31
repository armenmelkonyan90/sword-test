export interface IJwt {
  secret: string;
  primarySecret: string;
  expiresIn: string;
  refreshExpiresIn: string;
}

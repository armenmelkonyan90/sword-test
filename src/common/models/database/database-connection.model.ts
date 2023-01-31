export interface IDatabaseConnection {
  readonly host: string;
  readonly port: string | number;
  readonly username: string;
  readonly password: string;
  readonly database: string;
  readonly sync?: boolean;
}

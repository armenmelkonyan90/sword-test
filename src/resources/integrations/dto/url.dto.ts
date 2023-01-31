import { IsUrl } from 'class-validator';

export class UrlDTO {
  @IsUrl()
  redirectUrl: string;
}

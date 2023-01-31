import { IUrlResponse } from '@common/models';
import { IsUrl } from 'class-validator';

export class UrlResponseDTO implements IUrlResponse{
  @IsUrl()
  url: string;
}

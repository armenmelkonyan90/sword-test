import { HttpException, HttpStatus } from '@nestjs/common';

import { IMessageResponse, IValidationErrorsResponse } from '@common/models';

export function buildResponse<T>(
  success: boolean,
  data: T = null,
  error: IMessageResponse | IValidationErrorsResponse = null,
  status: HttpStatus = HttpStatus.BAD_REQUEST,
) {
  if (success) {
    return data;
  }
  throw new HttpException(error, status);
}

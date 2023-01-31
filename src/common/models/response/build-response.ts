export interface IMessageResponse {
  message: string;
}

export interface IValidationErrors {
  field: string;
  message: string;
}

export interface IValidationErrorsResponse {
  message: string;
  errors: IValidationErrors[];
}

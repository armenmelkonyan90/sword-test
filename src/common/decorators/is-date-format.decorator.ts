import { isValid, parse } from 'date-fns';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function IsDateFormat(
  format: string,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [format],
      validator: IsFormatConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'IsDateFormat' })
export class IsFormatConstraint implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const [format] = args.constraints;
    const date = parse(value, format, new Date());
    return isValid(date);
  }
}

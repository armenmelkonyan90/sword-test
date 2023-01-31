import { isValid } from 'tin-validator';
import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsTaxId(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isTaxId',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string | number) {
          return isValid(value);
        },
      },
    });
  };
}

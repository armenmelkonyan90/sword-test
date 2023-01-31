import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { US_STATES } from '../constants';

export function IsValidState(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidState',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const countryCode = (args.object as object)[relatedPropertyName];
          return (countryCode === 'US' && US_STATES.includes(value)) ||
            countryCode !== 'US'
            ? true
            : false;
        },
      },
    });
  };
}

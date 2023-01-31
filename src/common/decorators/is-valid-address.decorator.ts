import { isEmpty } from 'lodash';
import {
  ValidationOptions,
  registerDecorator,
  ValidationArguments,
} from 'class-validator';
import * as CONSTANTS from '../constants';

export function IsValidAddress(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isValidAddress',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          let pattern = `(\\w+)`;
          const [relatedPropertyName] = args.constraints;
          const countryCode = (args.object as object)[relatedPropertyName];
          const postalCodeArr = CONSTANTS.POSTAL_CODES.filter(
            (e) => e.ISO === countryCode,
          );
          if (isEmpty(postalCodeArr)) {
            return false;
          }
          const postalCodeObj = postalCodeArr[0];
          const { Regex } = postalCodeObj;
          if (Regex) {
            pattern = `(${Regex})(,\\s*)(\\w+)`;
          }

          return value.match(pattern) ? true : false;
        },
      },
    });
  };
}

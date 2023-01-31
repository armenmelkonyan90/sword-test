import { startCase } from 'lodash';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export default function ArrayDistinct(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string): void => {
    registerDecorator({
      name: 'ArrayDistinct',
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: object): boolean {
          if (Array.isArray(value) && value?.length) {
            const distinct = [
              ...new Set(value.map((v): object => v[property])),
            ];
            return distinct.length === value.length;
          }
          return false;
        },
        defaultMessage(args: ValidationArguments): string {
          const message: string = args?.value?.length
            ? `${startCase(
                args.property,
              )} must not contains duplicate entry for ${
                args?.constraints?.[0]
              }`
            : `${startCase(args.property)} must not be empty.`;
          return message;
        },
      },
    });
  };
}

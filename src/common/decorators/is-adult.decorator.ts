import { ValidationOptions, registerDecorator } from 'class-validator';
import { differenceInYears } from 'date-fns';

export function IsAdult(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isAdult',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: Date) {
          const birthday = new Date(value);
          const age = differenceInYears(new Date(), birthday);

          const isAdult = age >= 18;
          return isAdult;
        },
      },
    });
  };
}

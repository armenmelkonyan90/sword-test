/* eslint-disable @typescript-eslint/no-explicit-any */
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { plainToClass } from 'class-transformer';

export class ResponseInterceptor<T> implements NestInterceptor<T> {
  constructor(private Serializer: any, private propName?: string) { }

  public intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<T> {
    return next.handle().pipe(
      map((data: Observable<any>): any => {
        const serialize = (obj: any): any =>
          plainToClass(this.Serializer, obj, {
            excludeExtraneousValues: false,
          });

        const serialized = serialize(data);
        if (this.propName) {
          return { [this.propName]: serialized };
        }

        return serialized;
      }),
    );
  }
}

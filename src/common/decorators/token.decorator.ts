import { ITokenPayload } from '@common/models';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthToken = createParamDecorator(
    (_: string, ctx: ExecutionContext): ITokenPayload => {
        const request = ctx.switchToHttp().getRequest();
        const token = request.headers.authorization;

        return token;
    },
);

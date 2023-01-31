/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, NestMiddleware } from '@nestjs/common';
import requestIp from 'request-ip';

@Injectable()
export class IpMiddleware implements NestMiddleware {
  async use(
    req: any & { userIpAddress: string },
    _res: Response,
    next: () => void,
  ) {
    try {
      req.userIpAddress = requestIp.getClientIp(req.headers);
    } catch (e) {
      console.log('ip error =>', e);
    }
    next();
  }
}

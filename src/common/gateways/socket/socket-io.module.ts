import { SocketIoGateway } from './socket-io.gateway';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [SocketIoGateway],
  exports: [SocketIoGateway],
})
export class SocketIoModule {}

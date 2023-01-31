import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  SubscribeMessage,
} from '@nestjs/websockets';
import * as socketIo from 'socket.io';

@WebSocketGateway({ cors: true })
export class SocketIoGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: socketIo.Server;

  handleConnection(client: socketIo.Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: socketIo.Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string) {
    console.log(`Message received:`, message);
    this.server.emit('message', message);
  }
}

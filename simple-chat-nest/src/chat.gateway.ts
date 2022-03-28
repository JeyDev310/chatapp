import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;
  nicknames: string[] = [];

  handleConnection(client: Client) {}

  handleDisconnect(client: Client) {}

  @SubscribeMessage('hello')
  connectSomeone(
    @MessageBody() data: string,
    @ConnectedSocket() client: Client,
  ) {
    const nickname = data;
    if (this.nicknames.includes(nickname)) {
      this.server.sockets.sockets[client.id].emit('exists', 'true');
    } else {
      this.nicknames.push(nickname);
      this.server.sockets.sockets[client.id].emit('exists', 'false');
      console.log(`${nickname} joins the room.`);
      const comeOn = `${nickname} joins the room.`;
      this.server.emit('comeOn', comeOn);  
    }
  }

  private broadcast(event, client, message: any) {
    for (let id in this.server.sockets.sockets) {
      if (id !== client.id) this.server.sockets.sockets[id].emit(event, message);
    }
  }

  @SubscribeMessage('send')
  sendMessage(@MessageBody() data: string, @ConnectedSocket() client) {
    const [nickname, message] = data;
    console.log(`${client.id} : ${data}`);
    this.broadcast('message', client, [nickname, message]);
  }
}

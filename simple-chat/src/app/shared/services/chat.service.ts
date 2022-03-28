import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ChatService {
  userName = '';

  constructor(
    private socket: Socket
  ) {}

  sendHello(name: string) {
    this.userName = name;
    this.socket.emit('hello', name);
  }

  getHello(): Observable<string> {
    return this.socket.fromEvent<string>('exists');
  }

  onSend(message: string) {
    this.socket.emit('send', this.userName, message);
  }

  getMessages(): Observable<any> {
    return this.socket.fromEvent<any>('message');
  }
}

import { Injectable, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { AuthService } from './auth.service';
import { DataShareService } from './data-share.service';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  private socket: any;
  constructor(
    private auth: AuthService,
    private forwardMessage: DataShareService
  ) {}

  setupSocketConnection() {
    //init , connect and create aprivate room for each user
    this.socket = io('https://chat-app-ang.herokuapp.com');
    this.socket.emit('joinRoom', this.auth.getUserInfo().id);

    //some one joined , possibly a new account
    this.socket.on('joined', (data: any) => {
      if (data.id != this.auth.getUserInfo().id) {
        this.forwardMessage.refreshUsers(data.id);
        this.forwardMessage.updateStatus(data.id);
      }
    });

    //listen for messages
    this.socket.on('message', (data: any) => {
      this.forwardMessage.sendRemote(data.message);
    });

    //keep an eye out for anyone who might disconnect
    this.socket.on('left', (data: any) => {
      this.forwardMessage.updateStatus(data.id);
    });
  }

  //send messages
  messageSubmit(message: any) {
    this.socket.emit('message', message);
  }

  //disconnect on logout
  disconnectSocket() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

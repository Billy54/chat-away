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

  public setupSocketConnection() {
    //init , connect and create aprivate room for each user
    this.socket = io('https://chat-app-ang.herokuapp.com');
    this.socket.emit('userJoin', this.auth.getUserInfo().id);

    //some one joined , possibly a new account
    this.socket.on('joined', (data: any) => {
      this.forwardMessage.refreshUsers(data.id);
      this.forwardMessage.updateStatus(data);
    });

    //listen for messages
    this.socket.on('message', (data: any) => {
      this.forwardMessage.sendRemote(data.message);
    });

    //keep an eye out for anyone who might disconnect
    this.socket.on('left', (data: any) => {
      this.forwardMessage.updateStatus(data);
    });

    //some one added
    this.socket.on('invite', (room: any) => {
      this.forwardMessage.sendRoom(room);
      this.socket.emit('accept', room.id);
    });
  }

  //new custom room
  public newRoom(members: any, name: string) {
    this.socket.emit('newRoom', { name: name, members: members });
  }

  //invite some one to a custom room
  public invite(uid: string, rid: any) {
    this.socket.emit('add', { uid: uid, rid: rid });
  }

  //send messages
  public messageSubmit(message: any) {
    this.socket.emit('message', message);
  }

  //disconnect on logout
  public disconnectSocket() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

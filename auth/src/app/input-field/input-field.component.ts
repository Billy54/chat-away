import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataShareService } from '../services/data-share.service';
import { SocketioService } from '../services/socketio.service';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit, OnDestroy {
  private receiver: string = '';
  private custom: any;
  private roomId: any;
  public comment: string = '';
  public url: string = '';
  private observers: Subscription[] = [];

  constructor(
    private forwardMessage: DataShareService,
    private auth: AuthService,
    private io: SocketioService
  ) {}

  ngOnInit(): void {
    this.observers.push(
      this.forwardMessage.message.subscribe((message: any = []) => {
        this.receiver = message.id;
        this.custom = message.custom;
      })
    );

    //avatar url
    this.observers.push(
      this.forwardMessage.changeUrl.subscribe((url: string) => {
        this.url = url;
      })
    );

    //which room to append the comment
    this.observers.push(
      this.forwardMessage.writeToRoom.subscribe((id: string) => {
        this.roomId = id;
      })
    );
  }

  ngOnDestroy() {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
  }

  newComment() {
    if (this.comment.trim().length < 2) {
      return;
    }

    let newComment = {
      sender: this.auth.getUserInfo().id,
      senderName: this.auth.getUserInfo().name,
      receiver: this.receiver,
      text: this.comment.trim(),
      url: this.url,
      custom: this.custom,
      roomId: this.roomId,
    };

    this.forwardMessage.sendlocal(newComment);
    this.io.messageSubmit(newComment);
    this.comment = '';
  }
}

import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, ComponentFactoryResolver, Input } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChatAreaComponent } from '../chat-area/chat-area.component';
import { ChatDirective } from '../chat-area/chat.directive';
import { CommentComponent } from '../comment/comment.component';
import { AuthService } from '../services/auth.service';
import { DataShareService } from '../services/data-share.service';
import { SocketioService } from '../services/socketio.service';
import { ConversationDirective } from './conversation.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public infoName: string = '';
  public info: string = '';
  public el: any;
  public url: any;
  public fade: boolean = false;
  public loader: boolean = false;
  private readonly publicId = '60539a6801ac562984ae4f93';
  private cId: any;

  @ViewChild('chat') chatArea: any;

  constructor(
    private socketService: SocketioService,
    private dataShare: DataShareService,
    private r: Router
  ) {}

  ngAfterViewInit(): void {
    this.el = this.chatArea.nativeElement;
    this.dataShare.local.subscribe((d: any) => {
      this.smoothScrolling();
    });
  }

  ngOnInit(): void {
    this.socketService.setupSocketConnection();
    this.dataShare.message.subscribe((message: any = []) => {
      if (message.name != 'default') {
        this.infoName = message.name;
        if (message.id != this.cId) {
          this.loader = true;
        }
        this.smoothScrolling();
        this.cId = message.id;
        this.fadeOut();
        this.changeStatus(message.status);
      }
    });
    this.dataShare.status.subscribe((id) => {
      if (id == '' || this.cId == this.publicId) return;
      if (this.info == 'Active now.') {
        this.info = 'Offline.';
      } else {
        this.info = 'Active now.';
      }
    });
    this.dataShare.changeUrl.subscribe((url: string) => {
      this.url = url;
    });
    this.dataShare.loader.subscribe(() => {
      this.loader = false;
      this.smoothScrolling();
    });
  }

  changeStatus(status: boolean) {
    if (status) {
      this.info = 'Active now.';
    } else {
      this.info = 'Offline.';
    }
  }

  //scroll to bottom
  smoothScrolling() {
    setTimeout(() => {
      this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
    }, 200);
  }

  fadeOut() {
    this.fade = true;
    setTimeout(() => {
      this.fade = false;
    }, 800);
  }
}

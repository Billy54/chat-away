import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { Room } from '../Models/room';
import { AuthService } from '../services/auth.service';
import { CommentsService } from '../services/comments.service';
import { DataShareService } from '../services/data-share.service';
import { ChatDirective } from './chat.directive';

@Component({
  selector: 'chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css'],
})
export class ChatAreaComponent implements OnInit {
  @ViewChild(ChatDirective, { static: true })
  appChat!: ChatDirective;

  private rooms: any = Array<Room>();
  private vc!: ViewContainerRef;
  private activeRoom: any;
  private track = 0;
  private public = '604e3a7286eac403f0b7c50e';
  private uid = this.auth.getUserInfo().id;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private fetchData: DataShareService,
    private commentsService: CommentsService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.fetchData.message.subscribe((data: any) => {
      if (data.name == 'default') return;
      if (data.id == this.activeRoom) return;
      this.vc = this.appChat.viewContainerRef;
      this.vc.clear();
      this.activeRoom = data.id;
      this.getRoom();
    });

    // local append
    this.fetchData.local.subscribe((data: any) => {
      this.commentSectionInit(data);
      this.rooms.forEach((room: any) => {
        if (room.getSender() == this.activeRoom) room.addComment(data);
      });
    });

    //remote append
    this.fetchData.remote.subscribe((data: any) => {
      if (this.activeRoom == data.sender) {
        this.commentSectionInit(data);
      }
      if (data.receiver == this.public) {
        this.commentSectionInit(data);
      }
      this.rooms.forEach((room: any) => {
        if (room.getSender() == data.sender) room.addComment(data);
      });
    });
  }

  renderer(comments: any) {
    this.track = 0;
    console.log(this.rooms);
    comments.forEach((comment: any) => {
      this.commentSectionInit(comment);
    });
  }

  //create a comment instance for each comment
  commentSectionInit(data: any) {
    if (!data) return;
    this.vc = this.appChat.viewContainerRef;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      CommentComponent
    );
    const componentRef = this.vc.createComponent<CommentComponent>(
      componentFactory
    );
    //private room
    if (data.receiver == this.uid) {
      this.track++;
      if (this.track > 1) {
        (<CommentComponent>componentRef.instance).isFirst = false;
      }
      (<CommentComponent>componentRef.instance).foreign = true;
      //public room
    } else if (data.receiver == this.public && data.sender != this.uid) {
      (<CommentComponent>componentRef.instance).foreign = true;
    } else {
      this.track = 0;
    }
    (<CommentComponent>componentRef.instance).data = data;
  }

  getRoom() {
    for (let room of this.rooms) {
      if (room.getSender() == this.activeRoom) {
        this.renderer(room.getComments());
        return;
      }
    }
    this.fetchFromServer();
  }

  fetchFromServer() {
    //not found , need to fetch it or create it
    this.commentsService
      .getComments('room', {
        receiver: this.activeRoom,
        sender: this.auth.getUserInfo().id,
      })
      .subscribe((response: any = []) => {
        let room = new Room(response.comments, this.activeRoom);
        this.rooms.push(room);
        this.renderer(response.comments);
      });
  }
}

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
import { FileService } from '../services/file.service';
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
  private readonly public = '60539a6801ac562984ae4f93';
  private previousId: string = '';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private fetchData: DataShareService,
    private commentsService: CommentsService,
    private auth: AuthService,
    private fileService: FileService
  ) {}

  ngOnInit() {
    //on room change
    this.fetchData.message.subscribe((data: any) => {
      if (data.name == 'default') return;
      if (data.id == this.activeRoom) return;
      this.vc = this.appChat.viewContainerRef;
      this.vc.clear();
      this.activeRoom = data.id;
      this.getRoom();
      this.previousId = '';
    });

    // local append
    this.fetchData.local.subscribe((data: any) => {
      this.commentSectionInit(data);
      this.saveLocal(this.activeRoom, data);
    });

    //remote append
    this.fetchData.remote.subscribe((data: any) => {
      if (data.receiver == this.public) {
        this.saveLocal(this.public, data);
        if (this.public == this.activeRoom) {
          this.commentSectionInit(data);
        }
      } else {
        this.saveLocal(data.sender, data);
        if (this.activeRoom == data.sender) {
          this.commentSectionInit(data);
        }
      }
    });
  }

  saveLocal(id: string, data: any) {
    this.rooms.forEach((room: any) => {
      if (room.getSender() == id) {
        room.addComment(data);
      }
    });
  }

  renderer(comments: any) {
    comments.forEach((comment: any) => {
      this.commentSectionInit(comment);
    });
    this.fetchData.stopLoading();
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
    (<CommentComponent>componentRef.instance).data = data;
    (<CommentComponent>componentRef.instance).previousId = this.previousId;
    this.previousId = data.sender;
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

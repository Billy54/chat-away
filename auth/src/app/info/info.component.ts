import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../chat-rooms/user';
import { AuthService } from '../services/auth.service';
import { DataShareService } from '../services/data-share.service';
import { SocketioService } from '../services/socketio.service';
import { UsersService } from '../services/users.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'active-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit, OnDestroy {
  private custom: any;
  public infoName: string = '';
  public info: string = '';
  public url: any;
  public name: string = '';
  private users: User[] = [];
  public open: boolean = false;
  private observers: Subscription[] = [];

  constructor(
    private dataShare: DataShareService,
    private fetchUsers: UsersService,
    private io: SocketioService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.observers.push(
      this.dataShare.status.subscribe((data: any) => {
        if (data.id == '' || this.custom) return;
        if (this.info == 'Active now.') {
          this.info = 'Offline.';
        } else {
          this.info = 'Active now.';
        }
      })
    );
    this.observers.push(
      this.dataShare.message.subscribe((message: any = []) => {
        if (message.name != 'default') {
          this.infoName = message.name;
          this.url = message.avatar;
          this.changeStatus(message.status);
          this.custom = message.custom;
        }
      })
    );
  }

  ngOnDestroy() {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
  }

  changeStatus(status: boolean) {
    if (status) {
      this.info = 'Active now.';
    } else {
      this.info = 'Offline.';
    }
  }

  select(index: number) {
    this.users[index].active = !this.users[index].active;
  }

  submit() {
    let members: any[] = [];
    this.users.forEach((user) => {
      if (user.active) {
        members.push(user.details.id);
        user.active = false;
      }
    });
    members.push(this.auth.getUserInfo().id);
    if (members.length < 2 || this.name.length < 2) {
      return;
    }
    this.io.newRoom(members, this.name);
    this.openList();
  }

  openList() {
    this.name = '';
    this.open = !this.open;
    if (this.users.length < 1) {
      this.getList();
    }
  }

  get usersList() {
    return this.users;
  }

  getList() {
    if (this.users.length > 0) {
      return;
    }
    this.fetchUsers.getAll('users').subscribe((response: any = []) => {
      response.users.forEach((user: any) => {
        this.users.push(new User(user));
      });
    });
  }
}

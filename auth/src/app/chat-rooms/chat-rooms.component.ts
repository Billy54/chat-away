import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../services/data-share.service';
import { UsersService } from '../services/users.service';
import { User } from './user';

@Component({
  selector: 'chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css'],
})
export class ChatRoomsComponent implements OnInit, AfterViewInit {
  private users: User[] = [];
  public userName: string = '';
  private activeRoom: number = 0;

  constructor(
    private r: Router,
    private userService: UsersService,
    private dataShare: DataShareService
  ) {}

  ngAfterViewInit(): void {
    this.dataShare.newRoom.subscribe((room) => {
      if (!room.name) return;
      this.users.push(new User(room));
    });
  }

  ngOnInit(): void {
    this.userService.getAll('users').subscribe((response: any = []) => {
      for (const user of response.users) {
        this.users.push(new User(user));
      }
      this.changeRoom(0);
    });
    this.dataShare.refresh.subscribe((id) => {
      if (id == '') return;
      setTimeout(() => {
        this.addUser(id);
      }, 2500);
    });
    this.dataShare.status.subscribe((data) => {
      this.updateStatus(data);
    });
    this.dataShare.swapRoom.subscribe((id) => {
      let i = 0;
      this.users.forEach((user) => {
        if (user.details.id == id) {
          this.changeRoom(i);
        }
        i++;
      });
    });
  }

  get getUsers() {
    return this.users;
  }

  addUser(id: string) {
    for (const user of this.users) {
      if (user.details.id == id) return;
    }
    this.userService.getUser('users/' + id).subscribe((response: any = []) => {
      this.users.push(new User(response.user));
    });
  }

  changeRoom(index: any) {
    if (index < this.users.length) {
      this.dataShare.notifyChange({
        name: this.users[index].details.name,
        id: this.users[index].details.id,
        status: this.users[index].status,
        avatar: this.users[index].details.avatar,
        custom: this.users[index].details.custom,
      });
      this.r.navigate([
        { outlets: { chatArea: ['chat', this.users[index].details.id] } },
      ]);
      this.users[this.activeRoom].active = false;
      this.users[index].active = true;
      this.activeRoom = index;
    }
  }

  updateStatus(data: any) {
    if (!data) return;
    this.users.forEach((user: any) => {
      if (user.details.id == data.id) {
        user.status = data.alive;
      }
    });
  }

  searchUser() {
    for (const user of this.users) {
      if (
        !(user.details.name as string)
          .trim()
          .toLowerCase()
          .startsWith((this.userName as string).trim().toLowerCase())
      ) {
        user.isVisible = false;
      } else {
        user.isVisible = true;
      }
    }
  }
}

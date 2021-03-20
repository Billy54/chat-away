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

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.userService.getAll('users').subscribe((response: any = []) => {
      for (const user of response.users) {
        let newUser = new User(user);
        this.users.push(newUser);
      }
      this.changeRoom(0);
    });
    this.dataShare.refresh.subscribe((id) => {
      if (id == '') return;
      setTimeout(() => {
        this.addUser(id);
      }, 2500);
    });
    this.dataShare.status.subscribe((id) => {
      this.updateStatus(id);
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
        url: this.users[index].details.avatar,
      });
      this.r.navigate([
        { outlets: { chatArea: ['chat', this.users[index].details.id] } },
      ]);
      this.users[this.activeRoom].active = false;
      this.users[index].active = true;
      this.activeRoom = index;
    }
  }

  updateStatus(id: string) {
    if (id == '') return;
    this.users.forEach((user: User) => {
      if (user.details.id == id) {
        user.status = !user.status;
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

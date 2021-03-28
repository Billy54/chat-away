import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataShareService } from '../services/data-share.service';
import { UsersService } from '../services/users.service';
import { User } from '../Models/user';

@Component({
  selector: 'chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css'],
})
export class ChatRoomsComponent implements OnInit, OnDestroy {
  private users: User[] = [];
  public userName: string = '';
  private activeRoom: number = 0;
  private observers: Subscription[] = [];
  public active: boolean = false;

  constructor(
    private r: Router,
    private userService: UsersService,
    private dataShare: DataShareService
  ) {}

  ngOnDestroy(): void {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.observers.push(
      this.userService.getAll('users').subscribe((response: any = []) => {
        this.initUsers(response.users);
      })
    );

    //refresh users
    this.observers.push(
      this.dataShare.refresh.subscribe((id) => {
        setTimeout(() => {
          this.addUser(id);
        }, 2000);
      })
    );

    //update status
    this.observers.push(
      this.dataShare.status.subscribe((data) => {
        this.updateStatus(data);
      })
    );

    //swap current room from notifications
    this.observers.push(
      this.dataShare.swapRoom.subscribe((id) => {
        let i = 0;
        this.users.forEach((user) => {
          if (user.details.id == id) {
            this.changeRoom(i);
          }
          i++;
        });
      })
    );

    //invited to new room
    this.observers.push(
      this.dataShare.newRoom.subscribe((room) => {
        this.users.push(new User(room));
      })
    );
  }

  addUser(id: string) {
    for (const user of this.users) {
      if (user.details.id == id) return;
    }
    this.observers.push(
      this.userService
        .getUser('users/' + id)
        .subscribe((response: any = []) => {
          this.users.push(new User(response.user));
        })
    );
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
    this.users.forEach((user: any) => {
      if (user.details.id == data.id) {
        user.status = data.alive;
      }
    });
  }

  initUsers(users: any) {
    for (const user of users) {
      this.users.push(new User(user));
    }
    this.dataShare.passToComponent(users);
    this.changeRoom(0);
  }

  searchUser() {
    for (const user of this.users) {
      if (
        !(user.details.name as string)
          .trim()
          .toLowerCase()
          .startsWith(this.userName.trim().toLowerCase())
      ) {
        user.isVisible = false;
      } else {
        user.isVisible = true;
      }
    }
  }

  toggle() {
    this.active = !this.active;
    this.dataShare.switch(this.active);
  }

  get getUsers() {
    return this.users;
  }
}

import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataShareService } from '../services/data-share.service';
import { UsersService } from '../services/users.service';
import { User } from '../Models/user';
import { AuthService } from '../services/auth.service';
import { HostListener } from '@angular/core';
import { appState } from '../appState';

@Component({
  selector: 'chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css'],
})
export class ChatRoomsComponent implements OnInit, OnDestroy {
  public userName: string = '';
  private activeRoom: number = 0;
  private observers: Array<Subscription> = [];
  public active: boolean = false;
  public rooms: boolean = false;

  constructor(
    private r: Router,
    private userService: UsersService,
    private dataShare: DataShareService,
    private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
    appState.index = this.activeRoom;
  }

  ngOnInit(): void {
    if (appState.get().length > 0) {
      this.changeRoom(appState.index);
    } else {
      this.observers.push(
        this.userService.getAll('usersAll').subscribe((response) => {
          this.initUsers(response.users);
        })
      );
    }

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
        appState.get().forEach((user) => {
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
        appState.addUser(room);
      })
    );

    this.observers.push(
      this.dataShare.roomList.subscribe(() => {
        this.rooms = !this.rooms;
        if (this.rooms && this.active) {
          this.toggle();
        }
      })
    );
  }

  addUser(id: string) {
    for (const user of appState.get()) {
      if (user.details.id == id) return;
    }
    this.observers.push(
      this.userService
        .getUser('usersAll/' + id)
        .subscribe((response: any = []) => {
          appState.addUser(response.user);
        })
    );
  }

  changeRoom(index: any) {
    const users = appState.get();
    if (index < users.length) {
      this.dataShare.notifyChange({
        index: index,
        name: users[index].details.name,
        id: users[index].details.id,
        status: users[index].status,
        avatar: users[index].details.avatar,
        custom: users[index].details.custom,
      });
      this.r.navigate([
        { outlets: { chatArea: ['chat', users[index].details.id] } },
      ]);
      users[this.activeRoom].active = false;
      users[index].active = true;
      this.activeRoom = index;
      if (this.rooms) {
        this.rooms = false;
      }
    }
  }

  updateStatus(data: any) {
    appState.get().forEach((user: any) => {
      if (user.details.id == data.id) {
        user.status = data.alive;
      }
    });
  }

  initUsers(users: any) {
    if (!users) {
      return;
    }
    for (const user of users) {
      appState.addUser(user);
    }
    this.changeRoom(appState.index);
  }

  searchUser() {
    for (const user of appState.get()) {
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
    if (this.rooms) {
      this.rooms = false;
    }
    this.dataShare.switch(this.active);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth > 500) {
      this.rooms = false;
    }
  }

  get getUsers() {
    return appState.get();
  }

  get isDemo() {
    return this.authService.isDemo();
  }
}

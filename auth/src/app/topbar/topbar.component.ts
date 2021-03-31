import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SocketioService } from '../services/socketio.service';
import { Notification } from '../Models/notification';
import { DataShareService } from '../services/data-share.service';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit, AfterViewInit, OnDestroy {
  public notificationList: Notification[] = [];
  private observers: Subscription[] = [];
  public notifications: boolean = true;
  public profile: any = true;
  public overlay: boolean = true;
  public newmsg: boolean = false;
  public active: boolean = true;

  constructor(
    private router: Router,
    private dataShareService: DataShareService,
    private io: SocketioService,
    private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
  }

  ngAfterViewInit(): void {
    this.io.setupSocketConnection();
  }

  ngOnInit(): void {
    this.observers.push(
      this.dataShareService.remote.subscribe((data: any) => {
        this.notificationList.unshift(new Notification(data));
        if (!this.notifications) {
          this.newmsg = false;
        } else {
          this.newmsg = true;
        }
      })
    );

    //keep track of our current url
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event.url.startsWith('/users')) {
          this.active = false;
        } else {
          this.active = true;
        }
      }
    });
  }

  overlayCheck() {
    this.profile = true;
    this.notifications = true;
    this.overlay = true;
  }

  notificationsCheck() {
    this.notifications = !this.notifications;
    if (!this.notifications) {
      this.newmsg = false;
    }
    this.overlay = false;
    if (!this.profile) {
      this.profile = true;
    }
  }

  notSwap(v: any) {
    this.notifications = v;
  }

  ovSwap(v: any) {
    this.overlay = v;
    this.profile = v;
  }

  logout() {
    this.io.disconnectSocket();
    this.authService.logout('logout').subscribe((response: any = []) => {
      console.log(response);
    });
    this.router.navigateByUrl('/login');
  }

  browse(index: any) {
    this.dataShareService.swapCurrent(this.notificationList[index].getRoom());
    this.notificationsCheck();
  }

  users() {
    this.active = false;
    this.router.navigateByUrl('users');
  }

  home() {
    this.active = true;
    this.router.navigateByUrl('');
  }
}

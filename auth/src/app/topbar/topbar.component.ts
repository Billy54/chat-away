import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SocketioService } from '../services/socketio.service';
import { Notification } from '../Models/notification';
import { DataShareService } from '../services/data-share.service';
import { pipe, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() timeout: EventEmitter<boolean> = new EventEmitter<boolean>();
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
    private io: SocketioService
  ) {}

  ngOnDestroy(): void {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
    this.io.disconnectSocket();
    this.timeout.emit(true);
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
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url.startsWith('/users')) {
          this.active = false;
        } else {
          this.active = true;
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

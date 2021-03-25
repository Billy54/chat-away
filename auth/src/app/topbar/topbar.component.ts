import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SocketioService } from '../services/socketio.service';
import { Notification } from '../Models/notification';
import { DataShareService } from '../services/data-share.service';
import { FileService } from '../services/file.service';
import { UsersService } from '../services/users.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit, AfterViewInit {
  private el: any;
  public notificationList: Notification[] = [];
  public profile: boolean = true;
  public notifications: boolean = true;
  public overlay: boolean = true;
  public file: any;
  public exp: string = 'translateX(0px)';
  public expHeight: string = '197px';
  public url: string = '';
  public name: string = '';
  public newmsg: boolean = false;
  public fadeIn: boolean = false;
  public active: boolean = true;

  @ViewChild('imagePreview') preview: any;
  @ViewChild('input') imgInput: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataShareService: DataShareService,
    private fileService: FileService,
    private userService: UsersService,
    private io: SocketioService
  ) {}
  ngAfterViewInit(): void {
    this.el = this.preview.nativeElement;
    this.file = this.imgInput.nativeElement;
    this.io.setupSocketConnection();
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

  profileCheck() {
    this.profile = !this.profile;
    this.overlay = false;
    if (!this.notifications) {
      this.notifications = true;
    }
  }

  logout() {
    this.io.disconnectSocket();
    this.authService.logout('logout').subscribe((response: any = []) => {
      console.log(response);
    });
    this.router.navigateByUrl('/login');
  }

  appendNotification(data: any) {
    let notification = new Notification();
    let now = new Date();
    notification.date = formatDate(
      now,
      'dd/MM/yyyy hh:mm:ss a',
      'en-US',
      '+0530'
    );
    notification.name = data.senderName;
    notification.sender = data.sender;
    notification.receiver = data.receiver;
    notification.url = data.url;
    this.notificationList.unshift(notification);
  }

  changeAvatar() {
    this.exp = 'translateX(-297px)';
    this.expHeight = '400px';
  }

  slide() {
    this.exp = 'translateX(0px)';
    this.expHeight = '197px';
    this.fadeIn = false;
    setTimeout(() => {
      this.el.style.backgroundImage = 'url(' + this.url + ')';
    }, 200);
  }

  previewAvatar() {
    let reader = new FileReader();
    let element = this.el;
    reader.onload = function (e: any) {
      element.style.backgroundImage = 'url(' + e.target.result + ')';
    };
    reader.readAsDataURL(this.file.files[0]);
    this.fadeIn = true;
    setTimeout(() => {
      this.fadeIn = false;
    }, 500);
  }

  upload() {
    if (this.file && this.file.files[0]) {
      const fd = new FormData();
      fd.append('image', this.file.files[0]);
      this.fileService
        .postAvatar('avatar', fd)
        .subscribe((response: any = []) => {
          this.url = response.path;
          this.slide();
          this.dataShareService.sendUrl(this.url);
        });
    }
  }

  browse(index: any) {
    this.dataShareService.swapCurrent(this.notificationList[index].getRoom());
    this.notificationsCheck();
  }

  navigate() {
    if (this.active) {
      this.router.navigateByUrl('/users');
    } else {
      this.router.navigateByUrl('/');
    }
    this.active = !this.active;
  }

  ngOnInit(): void {
    this.dataShareService.remote.subscribe((data: any) => {
      if (data.sender == 'default') return;
      this.appendNotification(data);
      if (!this.notifications) {
        this.newmsg = false;
      } else {
        this.newmsg = true;
      }
    });
    this.userService
      .getUser('users/' + this.authService.getUserInfo().id)
      .subscribe((response: any = []) => {
        this.name = response.user.name;
        this.url = response.user.avatar;
        this.dataShareService.sendUrl(this.url);
      });
  }
}

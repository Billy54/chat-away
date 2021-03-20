import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SocketioService } from '../services/socketio.service';
import { Notification } from '../Models/notification';
import { DataShareService } from '../services/data-share.service';
import { DataService } from '../services/data.service';
import { FileService } from '../services/file.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit, AfterViewInit {
  private authService: AuthService;
  private router: Router;
  private io: SocketioService;
  private dataShareService: DataShareService;
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

  @ViewChild('imagePreview') preview: any;
  @ViewChild('input') imgInput: any;

  constructor(
    a: AuthService,
    r: Router,
    io: SocketioService,
    dataShare: DataShareService,
    private fileService: FileService,
    private userService: UsersService
  ) {
    this.authService = a;
    this.router = r;
    this.io = io;
    this.dataShareService = dataShare;
  }
  ngAfterViewInit(): void {
    this.el = this.preview.nativeElement;
    this.file = this.imgInput.nativeElement;
  }

  overlayCheck() {
    this.profile = true;
    this.notifications = true;
    this.overlay = true;
  }

  notificationsCheck() {
    this.notifications = !this.notifications;
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
    notification.date = Date.now().toString();
    notification.name = data.senderName;
    //notification.id = data.id;
    this.notificationList.push(notification);
  }

  changeAvatar() {
    this.exp = 'translateX(-297px)';
    this.expHeight = '400px';
  }

  slide() {
    this.exp = 'translateX(0px)';
    this.expHeight = '197px';
    setTimeout(() => {
      this.el.style.backgroundImage = 'url(' + this.url + ')';
    }, 200);
  }

  previewAvatar() {
    var reader = new FileReader();
    let element = this.el;
    reader.onload = function (e: any) {
      element.style.backgroundImage = 'url(' + e.target.result + ')';
    };
    reader.readAsDataURL(this.file.files[0]);
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
        });
    }
  }

  ngOnInit(): void {
    this.dataShareService.remote.subscribe((data: any) => {
      if (data.sender == 'default') return;
      this.appendNotification(data);
    });
    this.userService
      .getUser('users/' + this.authService.getUserInfo().id)
      .subscribe((response: any = []) => {
        this.name = response.user.name;
        this.url = response.user.avatar;
      });
  }
}

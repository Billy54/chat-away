import { Input, Output, ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataShareService } from '../services/data-share.service';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('imagePreview') preview: any;
  @ViewChild('input') imgInput: any;
  @Output() notCheck: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() ovCheck: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() signout: EventEmitter<any> = new EventEmitter<any>();
  @Input() not: any;
  @Input() prof: any;

  private el: any;
  public file: any;
  public exp: string = 'translateX(0px)';
  public expHeight: string = '197px';
  public url: string = this.authService.getUserInfo().avatar;
  public name: string = this.authService.getUserInfo().name;
  public fadeIn: boolean = false;

  constructor(
    private authService: AuthService,
    private fileService: FileService,
    private dataShare: DataShareService
  ) {}

  ngAfterViewInit(): void {
    this.el = this.preview.nativeElement;
    this.file = this.imgInput.nativeElement;
  }

  ngOnInit(): void {
    this.dataShare.sendUrl(this.url);
  }

  changeAvatar() {
    if (this.isDemo) {
      return;
    }
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
      fd.append('uid', this.authService.getUserInfo().id);
      this.fileService
        .postAvatar('avatar', fd)
        .subscribe((response: any = []) => {
          this.url = response.path;
          this.slide();
          this.dataShare.sendUrl(this.url);
        });
    }
  }

  logout() {
    this.signout.emit();
  }

  profileCheck() {
    this.notCheck.emit(true);
    this.ovCheck.emit(!this.prof);
  }

  get isDemo() {
    return this.authService.isDemo();
  }
}

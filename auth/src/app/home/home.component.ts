import { AfterViewInit, ComponentFactoryResolver, Input } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../services/data-share.service';
import { SocketioService } from '../services/socketio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  public el: any;
  public fade: boolean = false;
  public loader: boolean = false;
  private cId: any;

  @ViewChild('chat') chatArea: any;

  constructor(private dataShare: DataShareService, private r: Router) {}

  ngAfterViewInit(): void {
    this.el = this.chatArea.nativeElement;
    this.dataShare.local.subscribe((d: any) => {
      this.smoothScrolling();
    });
  }

  ngOnInit(): void {
    this.dataShare.message.subscribe((message: any = []) => {
      if (message.name != 'default') {
        if (message.id != this.cId) {
          this.loader = true;
        }
        this.smoothScrolling();
        this.cId = message.id;
        this.fadeOut();
      }
    });
    this.dataShare.loader.subscribe(() => {
      this.loader = false;
      this.smoothScrolling();
    });
  }
  //scroll to bottom
  smoothScrolling() {
    setTimeout(() => {
      this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
    }, 200);
  }

  fadeOut() {
    this.fade = true;
    setTimeout(() => {
      this.fade = false;
    }, 800);
  }
}

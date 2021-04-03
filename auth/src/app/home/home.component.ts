import { AfterViewInit, OnDestroy } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataShareService } from '../services/data-share.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  private el: any;
  public slide: boolean = false;
  public fade: boolean = false;
  public loader: boolean = false;
  private cId: any;
  private observers: Subscription[] = [];

  @ViewChild('chat') chatArea: any;

  constructor(private dataShare: DataShareService, private r: Router) {}

  ngOnDestroy() {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
  }

  ngAfterViewInit(): void {
    this.el = this.chatArea.nativeElement;
    this.observers.push(
      this.dataShare.local.subscribe((d: any) => {
        this.smoothScrolling();
      })
    );
  }

  ngOnInit(): void {
    //room switched
    this.observers.push(
      this.dataShare.message.subscribe((message: any = []) => {
        if (message.id != this.cId) {
          this.loader = true;
        }
        this.smoothScrolling();
        this.cId = message.id;
        this.fadeOut();
      })
    );

    //stop the loader
    this.observers.push(
      this.dataShare.loader.subscribe(() => {
        this.loader = false;
        this.smoothScrolling();
      })
    );
  }
  //scroll to bottom
  smoothScrolling() {
    setTimeout(() => {
      this.el.scrollTop = this.el.scrollHeight - this.el.clientHeight;
    }, 200);
  }

  slideRight() {
    this.slide = !this.slide;
  }

  fadeOut() {
    this.fade = true;
    setTimeout(() => {
      this.fade = false;
    }, 800);
  }
}

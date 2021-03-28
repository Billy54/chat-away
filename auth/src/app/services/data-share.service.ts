import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { Observer, ReplaySubject } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  //emit to the subscribers

  constructor() {}
  private modalSwitch = new Subject<string>();
  currentMessage = this.modalSwitch.asObservable();
  public registerModal(hidden: string) {
    this.modalSwitch.next(hidden);
  }

  //change current user info header , buffer size = 1 cache always the last emmit
  private changeName = new ReplaySubject<Object>(1);
  message = this.changeName.asObservable();
  public notifyChange(data: any) {
    this.changeName.next(data);
  }

  //pass comment data to chatArea for new comments!!!
  private commentData = new ReplaySubject<Object>(1);
  remote = this.commentData.asObservable();
  public sendRemote(d: any) {
    this.commentData.next(d);
  }

  //pass comment data to chatArea for new comments!!!
  private localData = new ReplaySubject<Object>(1);
  local = this.localData.asObservable();
  public sendlocal(d: any) {
    this.localData.next(d);
  }

  //potentially some one made a new account so we need to render them on the list
  private refreshRooms = new Subject<string>();
  refresh = this.refreshRooms.asObservable();
  public refreshUsers(id: string) {
    this.refreshRooms.next(id);
  }

  //update status
  private userStatus = new ReplaySubject<string>(1);
  status = this.userStatus.asObservable();
  public updateStatus(id: string) {
    this.userStatus.next(id);
  }

  //send new url to chat room
  private updateUrl = new ReplaySubject<string>(1);
  changeUrl = this.updateUrl.asObservable();
  public sendUrl(url: string) {
    this.updateUrl.next(url);
  }

  //swap current room
  private swap = new ReplaySubject<string>(1);
  swapRoom = this.swap.asObservable();
  public swapCurrent(id: string) {
    this.swap.next(id);
  }

  //room loader
  private load = new ReplaySubject<boolean>(1);
  loader = this.load.asObservable();
  public stopLoading() {
    this.load.next(true);
  }

  //invited to custom room
  private room = new ReplaySubject<Object>(1);
  newRoom = this.room.asObservable();
  public sendRoom(room: any) {
    this.room.next(room);
  }

  //in which room we will be saving the comments
  private roomId = new ReplaySubject<string>(1);
  writeToRoom = this.roomId.asObservable();
  public sendroomId(id: string) {
    this.roomId.next(id);
  }

  //open new room list
  private opener = new Subject<boolean>();
  openList = this.opener.asObservable();
  public switch(state: boolean) {
    this.opener.next(state);
  }

  //in which room we will be saving the comments
  private users = new Subject<any>();
  passUsers = this.users.asObservable();
  public passToComponent(users: any) {
    this.users.next(users);
  }
}

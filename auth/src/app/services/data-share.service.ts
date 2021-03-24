import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  //emit to the subscribers

  constructor() {}
  private modalSwitch = new BehaviorSubject('default');
  currentMessage = this.modalSwitch.asObservable();
  public registerModal(hidden: string) {
    this.modalSwitch.next(hidden);
  }

  //change current user info header
  private changeName = new BehaviorSubject<Object>({
    name: 'default',
    room: 0,
  });
  message = this.changeName.asObservable();
  public notifyChange(data: any) {
    if (data.sender == 'default') return;
    this.changeName.next(data);
  }

  //pass comment data to chatArea for new comments!!!
  private commentData = new BehaviorSubject<Object>({
    sender: 'default',
  });
  remote = this.commentData.asObservable();
  public sendRemote(d: any) {
    this.commentData.next(d);
  }

  //pass comment data to chatArea for new comments!!!
  private localData = new BehaviorSubject<Object>({
    sender: 'default',
  });
  local = this.localData.asObservable();
  public sendlocal(d: any) {
    this.localData.next(d);
  }

  //potentially some one mede a new account so we need to render them on the list
  private refreshRooms = new BehaviorSubject('');
  refresh = this.refreshRooms.asObservable();
  public refreshUsers(id: string) {
    if (id == '') return;
    this.refreshRooms.next(id);
  }

  //update status
  private userStatus = new BehaviorSubject('');
  status = this.userStatus.asObservable();
  public updateStatus(id: string) {
    if (id == '') return;
    this.userStatus.next(id);
  }

  //fetchRooms
  private userIds = new BehaviorSubject<any>({});
  userIdsMessage = this.userStatus.asObservable();
  public sendIds(ids: any) {
    if (ids == '') return;
    this.userIds.next(ids);
  }

  //send new url to chat room
  private updateUrl = new BehaviorSubject<string>('');
  changeUrl = this.updateUrl.asObservable();
  public sendUrl(url: string) {
    if (!url) return;
    this.updateUrl.next(url);
  }

  //swap current room
  private swap = new BehaviorSubject<string>('');
  swapRoom = this.swap.asObservable();
  public swapCurrent(id: string) {
    if (!id) return;
    this.swap.next(id);
  }

  //room loader
  private load = new BehaviorSubject<boolean>(false);
  loader = this.load.asObservable();
  public stopLoading() {
    this.load.next(true);
  }

  //room loader
  private room = new BehaviorSubject<any>({});
  newRoom = this.room.asObservable();
  public sendRoom(room: any) {
    this.room.next(room);
  }
}

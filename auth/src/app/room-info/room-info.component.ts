import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Details } from '../Models/details';
import { DataShareService } from '../services/data-share.service';
import { UsersService } from '../services/users.service';
import { AuthService } from '../services/auth.service';
import { User } from '../Models/user';

@Component({
  selector: 'room-info',
  templateUrl: './room-info.component.html',
  styleUrls: ['./room-info.component.css'],
})
export class RoomInfoComponent implements OnInit, OnDestroy {
  private info: Details[] = [];
  private observers: Subscription[] = [];
  private current!: Details;

  constructor(
    private dataShare: DataShareService,
    private userService: UsersService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.observers.push(
      this.dataShare.message.subscribe((data: any) => {
        console.log(data);
        this.displayInfo(data);
      })
    );
  }

  ngOnDestroy() {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
  }

  displayInfo(data: any) {
    for (const details of this.info) {
      if (details.rid == data.id) {
        this.current = details;
        this.current.custom = details.custom;
        return;
      }
    }
    this.newDetails(data);
  }

  newDetails(data: any) {
    if (!data.custom) {
      this.createDetails(
        data.avatar,
        [data.name, this.auth.getUserInfo().name],
        data.id,
        [],
        false
      );
    } else {
      this.fetchNames(data.id)
        .then((res) => {
          this.createDetails(data.avatar, res.names, data.id, res.ids, true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  createDetails(
    url: string,
    names: string[],
    id: string,
    uids: string[],
    custom: any
  ) {
    let details = new Details(url, names, id, uids);
    this.info.push(details);
    this.current = details;
    this.current.custom = custom;
  }

  async fetchNames(id: any) {
    return await this.userService.getNames('names/' + id).toPromise();
  }

  updateDetails(v: any) {
    this.info.forEach((el) => {
      if (el.rid == this.current.rid) {
        el.idS = v.details.id;
        el.uNames = v.details.name;
        this.current = el;
      }
    });
  }

  get currentRoom() {
    return this.current;
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy {
  constructor(private userService: UsersService) {}

  private users$!: Observable<any[]>; // hmm the async pipe is tricky to deal with
  private usersList: any = []; //if we have objects
  private observers: Subscription[] = [];

  ngOnInit(): void {
    this.observers.push(
      this.userService.getAll('usersAll').subscribe((res) => {
        this.usersList = res.users;
      })
    );
  }

  ngOnDestroy() {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
  }

  public get all() {
    return this.usersList;
  }
}

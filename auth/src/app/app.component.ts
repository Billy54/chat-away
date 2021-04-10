import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular';
  private authObserver: Observable<any> | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authObserver = new Observable((observer) => {
      setInterval(() => {
        if (!this.navBar) {
          observer.next(true);
        }
      }, 300);
    });
    this.authObserver.subscribe((val) => {
      this.authService.logout('logout');
      this.router.navigateByUrl('login');
    });
  }

  ngOnDestroy() {
    //localStorage.removeItem('token');
    //this.authService.logout('logout');
  }

  public get navBar() {
    return this.authService.isAuthenticated();
  }
}

import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';
  //private authObserver: Observable<any> | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  logout(e: any) {
    this.authService.logout('logout').subscribe(() => {
      this.authService.removeUserInfo();
      this.router.navigateByUrl('/login');
    });
  }

  public get navBar() {
    return this.authService.isAuthenticated();
  }
}

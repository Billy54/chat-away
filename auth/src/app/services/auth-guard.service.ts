import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private authService: any;
  private router: any;

  constructor(a: AuthService, r: Router) {
    this.authService = a;
    this.router = r;
  }

  //ensure if a route can be activated
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

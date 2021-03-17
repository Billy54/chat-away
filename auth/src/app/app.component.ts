import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { SocketioService } from './services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular';
  private authService: AuthService;

  constructor(a: AuthService) {
    this.authService = a;
  }

  ngOnInit() {}

  public navBar() {
    return this.authService.isAuthenticated();
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataShareService } from '../services/data-share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private authService: AuthService;
  private router: Router;
  private dataShare: DataShareService;

  constructor(a: AuthService, r: Router, d: DataShareService) {
    this.authService = a;
    this.router = r;
    this.dataShare = d;
  }

  //login validators
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.minLength(3),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  login() {
    //check if the form is valid
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .validate(
        this.loginForm.value.email,
        this.loginForm.value.password,
        'login'
      )
      .subscribe(
        (response: any = []) => {
          console.log(response);
          this.authService.setUserInfo(response.user);
          localStorage.removeItem('pass');
          this.router.navigate(['']);
        },
        //handle the error locally so we can display detailed messages to the user
        (error: any) => {
          if (error instanceof HttpErrorResponse && error && error.error) {
            if (error.error.message[0] == 'Incorrect password') {
              console.log(error.error.message[0]);
              this.loginForm.controls['password'].setErrors({ invalid: true });
            } else if (error.error.message[0] == 'Not Registered') {
              console.log(error.error.message[0]);
            } else {
              console.log(error.error.message[0]);
            }
          } else {
            throw error;
          }
        }
      );
  }

  //login form
  get name() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  toggleModal() {
    this.dataShare.registerModal('changed');
  }

  ngOnInit(): void {}
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private authService: AuthService;
  private router: Router;

  constructor(a: AuthService, r: Router) {
    this.authService = a;
    this.router = r;
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
        (response) => {
          localStorage.removeItem('pass');
          this.router.navigate(['']);
        },
        //we handle the error locally so we can display detailed messages to the user
        (error: any = []) => {
          if (error instanceof HttpErrorResponse) {
            if (error.error.message[0] == 'Incorrect password') {
              console.log(error.error.message[0]);
              this.loginForm.controls['password'].setErrors({ invalid: true });
            } else if (error.error.message[0] == 'Not Registered') {
              console.log(error.error.message[0]);
              this.loginForm.controls['email'].setErrors({ invalid: true });
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
  ngOnInit(): void {}
}

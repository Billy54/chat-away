import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidators } from './email.validator';
import { mustMatch } from './password.validators';
import { AuthService } from '../services/auth.service';
import { DataShareService } from '../services/data-share.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  private observers: Subscription[] = [];
  public password: string = '';
  public isActive: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dataShare: DataShareService
  ) {}

  ngOnInit(): void {
    this.observers.push(
      this.dataShare.currentMessage.subscribe((message) => {
        this.toggleModal();
      })
    );
  }

  ngOnDestroy() {
    this.observers.forEach((observer) => {
      observer.unsubscribe();
    });
  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl(
      '',
      [Validators.minLength(3), Validators.required, Validators.email],
      EmailValidators.shouldBeUnique
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password2: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      mustMatch(),
    ]),
  });

  register() {
    //check if the form is valid
    if (this.registerForm.invalid) {
      return;
    }

    this.authService
      .register(
        this.registerForm.value.name,
        this.registerForm.value.email,
        this.registerForm.value.password,
        'register'
      )
      .subscribe((response: any = []) => {
        this.authService.setUserInfo(response.user);
        this.router.navigate(['/']);
      });
  }

  //register form
  get regName() {
    return this.registerForm.get('name');
  }

  get regEmail() {
    return this.registerForm.get('email');
  }

  get regPassword() {
    return this.registerForm.get('password');
  }

  get regConfirm() {
    return this.registerForm.get('password2');
  }

  onChange() {
    localStorage.setItem('pass', this.password);
  }

  public toggleModal() {
    this.isActive = !this.isActive;
  }
}

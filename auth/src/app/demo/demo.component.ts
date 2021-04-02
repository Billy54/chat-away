import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  //demo validators
  demoForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
  });

  loginDemo() {
    if (this.demoForm.invalid) {
      return;
    }

    let uname = this.demoForm.value.name;
    this.authService
      .register(uname + '', uname + '@email.com', 'demoAccount', 'demo')
      .subscribe((res) => {
        this.closeModal();
        this.router.navigate(['']);
      });
  }

  private closeModal() {
    const btn = document.querySelector('#close') as HTMLElement;
    btn.click();
  }

  get name() {
    return this.demoForm.get('name');
  }
}

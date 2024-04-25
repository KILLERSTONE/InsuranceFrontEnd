import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginForm } from '../../shared/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  private subscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();

    if (typeof sessionStorage !== 'undefined') {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['/home']);
      }
    }

  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      const formValue: LoginForm = this.loginForm.value;
      this.subscription = this.authService.loginUser(formValue).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.authService.setLoggedIn(response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    if (formGroup.controls) {
      Object.values(formGroup.controls).forEach(control => {
        control.markAsTouched();
        if (control instanceof FormGroup) {
          this.markFormGroupTouched(control);
        }
      });
    }
  }
}

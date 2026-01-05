import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../../../core/services/auth';
@Component({
  selector: 'app-login',
   standalone: true,
 imports: [
    CommonModule,         
    ReactiveFormsModule ,  
     RouterModule   
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

loginForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder,
    private authService: Auth,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  loading = false;
  error = '';

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const { email, password } = this.loginForm.value;
   const payload = {
      email: this.email?.value,
      password: this.password?.value, // backend will hash
    };

    this.authService.login(payload)
      .subscribe({
        next: () => {
          // ✅ Redirect after successful login
          this.router.navigate(['/products']);
        },
        error: err => {
          this.error = err.message || 'Login failed';
          this.loading = false;
          this.isSubmitting = false;
        }
      });
  }

 
  get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

}

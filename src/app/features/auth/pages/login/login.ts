import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const { email, password } = this.loginForm.value;

    console.log('Login request:', { email, password });

    // TODO: Call GraphQL login API here

    setTimeout(() => {
      this.isSubmitting = false;
      alert('Login successful (mock)');
    }, 1000);
  }

 
  get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

}

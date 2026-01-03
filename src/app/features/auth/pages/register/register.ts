import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../../core/services/auth';
@Component({
  selector: 'app-register',
   standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [Auth],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  signupForm: FormGroup;
  isSubmitting = false;
 constructor(private fb: FormBuilder, private router: Router,private auth: Auth) {

  this.signupForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
    roleId: [null, Validators.required] // StoreOwner / Buyer
  });
}



  get fullName() {
    return this.signupForm.get('fullName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get roleId() {
    return this.signupForm.get('roleId');
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const payload = {
      fullName: this.fullName?.value,
      email: this.email?.value,
      password: this.password?.value, // backend will hash
      roleId: this.roleId?.value
    };

    console.log('Signup payload:', payload);

    // TODO: Call GraphQL Signup Mutation
    this.auth.register(this.signupForm.value).subscribe({
      next: () => this.router.navigate(['/products']),
      error: err => {
        err.message;
      }
    });
    // setTimeout(() => {
    //   this.isSubmitting = false;
    //   alert('Signup successful (mock)');
    //  this.router.navigate(['/products']);
    // }, 1000);
  }
}


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Products } from '../../../../core/services/products';
import { Auth } from '../../../../core/services/auth';
@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd implements OnInit{
  loading = false;
  errorMessage = '';


  productForm: FormGroup;
  user: any; 
  constructor(private fb: FormBuilder, private productService: Products,private authService: Auth) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(200)]],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      stockQuantity: [0, [Validators.required, Validators.min(0)]]
    });
  }
  ngOnInit(): void {
     this.user = this.authService.getUser(); // ✅ assign value
  }

  submit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';
  const payload = {
      productName: this.productForm.value.productName,
      description: this.productForm.value.description,
      price: Number(this.productForm.value.price),
      stockQuantity: Number(this.productForm.value.stockQuantity),
      productOwnerId : this.user.userId
  };
    this.productService.addProduct(payload)
      .subscribe({
        next: () => {
          this.loading = false;
          this.productForm.reset();
          alert('Product added successfully');
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err.message || 'Something went wrong';
        }
      });
  }
}
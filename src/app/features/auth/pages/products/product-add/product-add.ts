import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css',
})
export class ProductAdd {
productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.maxLength(200)]],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      stockQuantity: [0, [Validators.required, Validators.min(0)]]
    });
  }

  submit() {
    if (this.productForm.invalid) return;

    const product = this.productForm.value;
    console.log('Product Data:', product);

    // TODO: Call GraphQL mutation here
  }
}
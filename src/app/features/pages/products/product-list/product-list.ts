import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Products } from '../../../../core/services/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  @Input() products: any[] = [];


  constructor(private productService: Products) {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res.data.products;
    });
  }
}

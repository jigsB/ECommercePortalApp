import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../../../core/services/products';
import { Auth } from '../../../../core/services/auth';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  user: any; 
  products: any[] = [];
  constructor(private productService: Products, private authService: Auth) {}

  ngOnInit(): void {
    this.user = this.authService.getUser(); // ✅ assign value
    this.getProducts();
}

  getProducts(){
    if(this.user.role === 'Buyer'){
  this.productService.getAllProducts().subscribe(({ data, loading }: any) => {
    if (!loading && data?.allProducts) {
      this.products = [...data.allProducts]; // force change detection
    }
  });
}
else if(this.user.role === 'StoreOwner'){
  this.productService.getOwnersProducts(this.user.userId).subscribe(({ data, loading }: any) => {
    if (!loading && data?.allProducts) {
      this.products = [...data.allProducts]; // force change detection
    }
  });
}
else{
  this.products = [];
}
  }

  addToCart(product: any) {
    if (!product || product.stockQuantity <= 0) {
      return;
    }

    const cartItem = {
      productId: product.productId,
      productName: product.productName,
      price: product.price,
      quantity: 1
    };

    console.log('Added to cart:', cartItem);

    // Example: store in localStorage (temporary)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existing = cart.find((c: any) => c.productId === cartItem.productId);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

}

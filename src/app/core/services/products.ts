import {  OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ADD_PRODUCT, GET_PRODUCTS } from '../../graphql/mutations/product.mutation';
import { Auth } from './auth';

@Injectable({ providedIn: 'root' })
export class Products implements OnInit {
  user: any; 
  constructor(private apollo: Apollo, private authService: Auth) { }

  ngOnInit(): void {
    this.user = this.authService.getUser(); // ✅ assign value
  }
  getAllProducts() {
    return this.apollo.watchQuery({
      query: GET_PRODUCTS
    }).valueChanges;
  }

  getOwnersProducts(ownerId: string) {
    return this.apollo.watchQuery({
      query: GET_PRODUCTS
    }).valueChanges;
  }

    getProductById() {
    return this.apollo.watchQuery({
      query: GET_PRODUCTS
    }).valueChanges;
  }

  addProduct(input: any) {
    return this.apollo.mutate({
      mutation: ADD_PRODUCT,
      variables: { input }
    });
  }
}

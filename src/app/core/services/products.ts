
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ADD_PRODUCT, GET_PRODUCTS } from '../../graphql/mutations/product.mutation';

@Injectable({ providedIn: 'root' })
export class Products {

  constructor(private apollo: Apollo) {}

  getProducts() {
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

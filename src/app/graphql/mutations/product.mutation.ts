import { gql } from 'apollo-angular';

export const GET_PRODUCTS = gql`
  query {
    products {
      productId
      productName
      price
      stockQuantity
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation ($input: CreateProductInput!) {
    addProduct(input: $input) {
      productId
      productName
    }
  }
`;

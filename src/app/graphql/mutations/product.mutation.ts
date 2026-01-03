import { gql } from 'apollo-angular';

export const ADD_PRODUCT = gql`
  mutation AddProduct($input: AddProductInput!) {
    addProduct(input: $input) {
      productId
      productName
      price
      stockQuantity
    }
  }
`;
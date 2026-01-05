import { gql } from 'apollo-angular';

export const GET_PRODUCTS = gql`
  query {
    allProducts {
      productId
      productName
      price
      stockQuantity
    }
  }
`;
export const GET_PRODUCTS_ById = gql`
  query GetProductById($productId: UUID!) {
    productById(productId: $productId) {
      productId
      productName
      price
      stockQuantity
    }
  }
`;

export const GET_Oweners_PRODUCTS = gql`
  query GetOwnersProducts($ownerId: UUID!) {
    ownersProducts(ownerId: $ownerId) {
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

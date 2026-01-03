import { gql } from 'apollo-angular';

/**
 * Get all products (Buyer view)
 */
export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      productId
      productName
      description
      price
      stockQuantity
      isActive
      createdOn
    }
  }
`;

/**
 * Get products by store owner
 */
export const GET_MY_PRODUCTS = gql`
  query GetMyProducts {
    myProducts {
      productId
      productName
      price
      stockQuantity
      isActive
      createdOn
    }
  }
`;

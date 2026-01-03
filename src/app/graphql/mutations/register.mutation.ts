import { gql } from 'apollo-angular';

export const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      userId
      email
      roleId
    }
  }
`;

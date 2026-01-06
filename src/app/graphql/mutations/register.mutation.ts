import { gql } from 'apollo-angular';

export const REGISTER_MUTATION = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      user {
        userId
        fullName
        email
        role
      }
    }
  }
`;

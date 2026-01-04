import { gql } from 'apollo-angular';

export const REGISTER_MUTATION = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      userId
      email
      roleId
    }
  }
`;

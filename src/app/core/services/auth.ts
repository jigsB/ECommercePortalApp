import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { REGISTER_MUTATION } from '../../graphql/mutations/register.mutation';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private apollo: Apollo) {}

  register(input: any) {
    return this.apollo.mutate({
      mutation: REGISTER_MUTATION,
      variables: { input }
    });
  }
}

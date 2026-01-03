import { inject } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

export function apolloConfig() {
  const httpLink = inject(HttpLink);

  return {
    link: httpLink.create({
      uri: 'https://localhost:7260/graphql',
    }),
    cache: new InMemoryCache(),
  };
}

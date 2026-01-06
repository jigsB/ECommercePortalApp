import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { REGISTER_MUTATION } from '../../graphql/mutations/register.mutation';
import { LOGIN_MUTATION } from '../../graphql/mutations/login.mutation';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';

  constructor(private apollo: Apollo,private router: Router) {}

  createUser(input: any) {
    return this.apollo.mutate<any>({
      mutation: REGISTER_MUTATION,
      variables: { input }
    }).pipe(
      map(result => {
        
        const registerData = result.data.createUser;
        // ✅ Save to localStorage
        localStorage.setItem(this.TOKEN_KEY, registerData.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(registerData.user));

        return registerData;
      })
    );
  }
  login(input: any) {
    return this.apollo.mutate<any>({
      mutation: LOGIN_MUTATION,
      variables: { input }
    }).pipe(
      map(result => {
        const loginData = result.data.login;

        // ✅ Save to localStorage
        localStorage.setItem(this.TOKEN_KEY, loginData.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(loginData.user));

        return loginData;
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/login']);
    this.apollo.client.resetStore();
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

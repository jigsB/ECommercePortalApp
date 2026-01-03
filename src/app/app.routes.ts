import { RouterModule, Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { NgModule } from '@angular/core';

// export const routes: Routes = [

//   { path: 'login', component: Login },
//   { path: 'signup', component: Register },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
// ];
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth-module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

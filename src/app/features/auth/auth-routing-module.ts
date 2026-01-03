import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login  } from './pages/login/login';
import { Register } from './pages/register/register';
import { ProductList } from './pages/products/product-list/product-list';
import { ProductAdd } from './pages/products/product-add/product-add';

const routes: Routes = [
  { path: 'login', component: Login  },
  { path: 'signup', component: Register },
  {path: 'products',
    children: [
      { path: 'add', component: ProductAdd },
      { path: 'list', component: ProductList }
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}



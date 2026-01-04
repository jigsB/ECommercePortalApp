import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login  } from './pages/login/login';
import { Register } from './pages/register/register';
import { ProductList } from './pages/products/product-list/product-list';
import { ProductAdd } from './pages/products/product-add/product-add';
import { AuthLayout } from '../../layout/auth-layout/auth-layout';
import { MainLayout } from '../../layout/main-layout/main-layout';

// const routes: Routes = [
//   { path: 'login', component: Login  },
//   { path: 'signup', component: Register },
//   {path: 'products',
//     children: [
//       { path: 'add', component: ProductAdd },
//       { path: 'list', component: ProductList }
//     ]}

// ];
const routes: Routes = [

  // Auth pages (NO sidebar)
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'signup', component: Register }
    ]
  },

  // Protected pages (WITH sidebar)
  {
    path: '',
    component: MainLayout,
    children: [
      
      { path: 'products', children: [
          { path: 'add', component: ProductAdd },
          { path: 'list', component: ProductList }
        ]
      },
      //{ path: 'orders', component: Orders } // Assuming Orders component exists
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}



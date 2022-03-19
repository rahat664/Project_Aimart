import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./Pages/about/about.module').then(m => m.AboutModule),
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./Pages/contact/contact.module').then(m => m.ContactModule),
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./Pages/products/products.module').then(m => m.ProductsModule),
    pathMatch: 'full'
  },
  {
    path: 'cart',
    loadChildren: () => import('./Pages/cart/cart.module').then(m => m.CartModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, loadChildren: () => import('./components/home/home.module').then((route) => route.HomeModule)},

  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then((route) => route.UserModule),
  },

  {
    path: 'product',
    loadChildren: () => import('./components/product/product.module').then((route) => route.ProductModule),
  },

  {
    path: 'category/:_id', component: CategoryComponent
  },

  {
    path: 'coming-soon', component: ComingSoonComponent
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const appRoutes: Routes=[
  { path : 'product-item',component: ProductItemComponent},
  { path : 'product-detail/:_id',component: ProductDetailComponent}
  
];



@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

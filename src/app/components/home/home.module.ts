import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerShoppingComponent } from './banner-shopping/banner-shopping.component';
import { HomeRoutingModule } from './home-routing.module';
import { FacilityComponent } from './facility/facility.component';
import { NgxGlideModule } from 'ngx-glide';
import { BannerDisconComponent } from './banner-discon/banner-discon.component';
import { BestProductComponent } from './product/best-product/best-product.component';
import { RecomentProductComponent } from './product/recoment-product/recoment-product.component';




@NgModule({
  declarations: [HomeComponent, CarouselComponent, BannerShoppingComponent,  FacilityComponent, CarouselComponent, BannerDisconComponent, BestProductComponent, RecomentProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxGlideModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

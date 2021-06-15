import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CartComponent } from './cart/cart.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';

@NgModule({
  declarations: [UserComponent, CartComponent, OrderListComponent, LoginComponent, RegisterComponent, ProfileComponent, ForgetPassComponent, ProfileDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }

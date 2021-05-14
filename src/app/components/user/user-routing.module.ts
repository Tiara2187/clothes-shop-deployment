import { NgModule } from '@angular/core';

import { CartComponent } from './cart/cart.component';
import { OrderListComponent } from './order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { AuthGuard } from './../Shared-Api/auth/auth.guard.service';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  {path: 'cart', canActivate:[AuthGuard], component: CartComponent},
  {path: 'order-list', canActivate:[AuthGuard], component: OrderListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forget-pass', component: ForgetPassComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile-detail', canActivate:[AuthGuard], component: ProfileDetailComponent},
  {path: 'profile', canActivate:[AuthGuard], component: ProfileComponent},

]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

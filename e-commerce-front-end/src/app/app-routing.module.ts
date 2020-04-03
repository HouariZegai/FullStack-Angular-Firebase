import { AuthGuardService } from './services/guards/auth-guard.service';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent, data: {index: 0} },
  { path: "cart", component: CartComponent, canActivate: [AuthGuardService], data: {index: 1} },
  { path: "admin", component: ProductsComponent, canActivate: [AuthGuardService], data: {index: 2} },
  { path: "signup", component: SignupComponent, data: {index: 3} },
  { path: "login", component: LoginComponent, data: {index: 4} },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {ProductCategoryComponent} from './pages/product-category/product-category.component';
import {ProductDetailsComponent} from './pages/product-details/product-details.component';
import {CartComponent}from './pages/cart/cart.component'  ;

export const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'Product/Category', component: ProductCategoryComponent },
  { path: 'Product/Detail', component: ProductDetailsComponent },
  { path: 'Cart', component: CartComponent },




];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { UserComponent } from '../app/layouts/user/user.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './index/login/login.component';
import { AuthGuard } from './shared/services/auth_guard';
import {UserAccountComponent} from '../app/layouts/user/user-account/user-account.component';
import { ProductListComponent } from './layouts/product/product-list/product-list.component';
import { FavoriteProductsComponent } from './layouts/product/favorite-products/favorite-products.component';
import { CartProductsComponent } from './layouts/product/cart-products/cart-products.component';


const routes: Routes = [

  {path: '', children: 
  [
{path:'', component: IndexComponent},
{path:'login', component: LoginComponent}
  ]},

  {path:'users', component: UserComponent, canActivate: [AuthGuard],
children: [ {path:'', component: UserAccountComponent, outlet: 'profileOutlet'}] },

  

 
{
  path: 'about', component: AboutComponent
},


  
  {path: 'products', children: 
  [
    
   {path:'', component: IndexComponent},
   {path:'all-products', component: ProductListComponent},
   {path:'favourite-products', component: FavoriteProductsComponent},
   {path:'cart-items', component: CartProductsComponent},

  ]},
  
{path: 'admin', component:AdminComponent, children:
[
 {path:'products', component:AdminProductsComponent},
 {path: 'users', component: AdminUsersComponent}
] 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

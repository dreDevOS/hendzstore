
//Core Dependencies
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {IndexRoutes} from './index.routing';

import {ProductModule}  from '../layouts/product/product.module';

//Components 

import {IndexComponent} from './index.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent} from '../about/about.component';
import { CartProductsComponent } from '../layouts/product/cart-products/cart-products.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminProductsComponent } from '../admin/admin-products/admin-products.component';
import { AdminUsersComponent } from '../admin/admin-users/admin-users.component';





@NgModule({

  declarations: [IndexComponent, NavbarComponent, LoginComponent, FooterComponent, AboutComponent, CartProductsComponent, AdminComponent, AdminProductsComponent, AdminUsersComponent],
   schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule, ProductModule,SharedModule, RouterModule.forChild(IndexRoutes)],
   
    exports: [NavbarComponent, FooterComponent],
    providers: []

})
export class IndexModule { }

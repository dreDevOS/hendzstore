import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminUsersComponent} from './admin/admin-users/admin-users.component';
import {UserComponent} from '../app/layouts/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AboutComponent } from './about/about.component';
import { AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AuthService} from '../app/auth/auth.service';
import {routes} from './app.routes';
import {environment} from '../environments/environment';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { IndexModule } from './index/index.module';
import { FooterComponent } from './index/footer/footer.component';
import { LoginComponent } from './index/login/login.component';
import { UserAccountComponent } from './layouts/user/user-account/user-account.component';
import { AuthGuard } from './shared/services/auth_guard';
import { ProductComponent } from './layouts/product/product.component';
import { ProductListComponent } from './layouts/product/product-list/product-list.component';
import { ProductDetailComponent } from './layouts/product/product-detail/product-detail.component';
import { FavoriteProductsComponent } from './layouts/product/favorite-products/favorite-products.component';
import { CheckoutComponent } from './layouts/product/checkout/checkout.component';
import { CartProductsComponent } from './layouts/product/cart-products/cart-products.component';
import { CartCalculatorComponent } from './layouts/product/cart-calculator/cart-calculator.component';
import { BestProductComponent } from './layouts/product/best-product/best-product.component';
import { AddProductComponent } from './layouts/product/add-product/add-product.component';
import {SharedModule} from "../app/shared/shared.module";



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    UserComponent,
    AboutComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UserAccountComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    FavoriteProductsComponent,
    CheckoutComponent,
    CartProductsComponent,
    CartCalculatorComponent,
    BestProductComponent,
    AddProductComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      StoreModule,
      AngularFireModule.initializeApp(environment.firebase ),
      AngularFirestoreModule,
      AngularFireAuthModule,
      AngularFireDatabaseModule,
       HttpModule,
       FormsModule,
       ReactiveFormsModule,
      StoreDevtoolsModule,
      routes,
      IndexModule,
      SharedModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

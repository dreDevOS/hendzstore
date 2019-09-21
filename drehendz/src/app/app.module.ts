import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartService } from './products/services/cart.service';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminUsersComponent} from './admin/admin-users/admin-users.component';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './products/cart/cart.component';
import {UserComponent} from '../app/layouts/user/user.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FeatureProductComponent } from './products/feature-product/feature-product.component';
import { AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AuthService} from '../app/auth/auth.service';
import {routes} from './app.routes';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
  import { from } from 'rxjs';
  import{CardComponent} from '../app/products/card/card.component';
  import{CardListComponent} from '../app/products/card-list/card-list.component';
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
export const firebaseConfig = {
  apiKey: "AIzaSyBcRdcmeKxUzSj9artsU4xGYGDF5vz9cJc",
  authDomain: "drehendz.firebaseapp.com",
  databaseURL: "https://drehendz.firebaseio.com",
  projectId: "drehendz",
  storageBucket: "drehendz.appspot.com",
  messagingSenderId: "715767442487",
  appId: "1:715767442487:web:9f8a21fd027f3330"
};



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    ProductsComponent,
    CartComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    HomeComponent,
    FeatureProductComponent,
    CardComponent,
    CardListComponent,
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
      IndexModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

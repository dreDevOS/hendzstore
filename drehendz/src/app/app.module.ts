import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartService } from './products/services/cart.service';
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminUsersComponent} from './admin/admin-users/admin-users.component';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './products/cart/cart.component';
import {UserComponent} from './user/user.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FeatureProductComponent } from './products/feature-product/feature-product.component';
import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import {AngularFirestoreModule} from '@angular/fire/firestore';


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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      StoreModule,
      AngularFireModule.initializeApp(environment),
      AngularFirestoreModule,
      StoreDevtoolsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

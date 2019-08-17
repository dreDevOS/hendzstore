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
import { AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AuthService} from '../app/auth/auth.service';
import {routes} from './app.routes';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
  import { from } from 'rxjs';
  import{CardComponent} from '../app/products/card/card.component';
  import{CardListComponent} from '../app/products/card-list/card-list.component';
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
    CardListComponent
    
    
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
      StoreDevtoolsModule,
      routes
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

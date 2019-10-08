import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AuthService} from '../app/auth/auth.service';
import {routes} from './app.routes';
import {environment} from '../environments/environment';
import { IndexModule } from './index/index.module';
import { AuthGuard } from './shared/services/auth_guard';
import {SharedModule} from "../app/shared/shared.module";
import { UserModule } from './layouts/user/user.module';



@NgModule({
  declarations: [AppComponent],
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
      SharedModule,
      UserModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

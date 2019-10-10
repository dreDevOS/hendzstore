import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppComponent} from './app.component';
import { IndexModule } from './index/index.module';
import {SharedModule} from "../app/shared/shared.module";
import { UserModule } from './layouts/user/user.module';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppComponent],
  imports: [
      BrowserModule, 
      IndexModule,
      SharedModule,
      UserModule,
      RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
  
})
export class AppModule { }

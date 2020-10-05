import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppComponent} from './app.component';
import { IndexModule } from './index/index.module';
import {SharedModule} from "../app/shared/shared.module";
import { UserModule } from './layouts/user/user.module';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { ProductModule } from './layouts/product/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderSuccessComponent } from './layouts/product/order-success/order-success.component';
import { MyOrdersComponent } from './layouts/product/my-orders/my-orders.component';
import { AdminModule } from './admin/admin/admin.module';
import { FooterComponent } from './index/footer/footer.component';






@NgModule({
  declarations: [AppComponent, OrderSuccessComponent, MyOrdersComponent],
  imports: [
      BrowserModule, 
      IndexModule,
      ProductModule,
      AdminModule,
      SharedModule,
      UserModule,
      RouterModule.forRoot(AppRoutes),
      BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
  
})
export class AppModule { }

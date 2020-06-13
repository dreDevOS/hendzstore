import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from '../admin-orders/admin-orders.component';
import { AdminProductsComponent } from '../admin-products/admin-products.component';
import { AddProductComponent } from 'src/app/admin/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { MyOrdersComponent } from 'src/app/layouts/product/my-orders/my-orders.component';
import { AuthGuard } from 'src/app/shared/services/auth_guard';
import { AdminGaurd } from 'src/app/shared/services/admin-guard';



@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'admin-products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminGaurd]
        
      },
      {
        path: 'add-product',
        component: AddProductComponent,
        canActivate: [AuthGuard, AdminGaurd]
        
      },
      
      {
        path: 'admin-orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminGaurd]
      }
    ])
  ]
})
export class AdminModule { }

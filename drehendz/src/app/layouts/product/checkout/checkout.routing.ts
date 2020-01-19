import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from 'angular-bootstrap-md';
import { AuthGuard } from 'src/app/shared/services/auth_guard';
import { NgModule } from '@angular/core';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ResultComponent } from './result/result.component';
import { ProductsComponent } from './products/products.component';

export const checkoutRoutes: Routes = [
    {
        path: 'checkouts',
        component: CheckboxComponent,
        canActivate: [AuthGuard], 
        children: [
            {
                path: '',
                component: ProductsComponent,
                outlet: 'checkOulLet'
            },
            {
                path: 'shipping-details',
                component: ShippingDetailsComponent,
                outlet: 'checkOutlet'
                
            },
            {
                path: 'billing-details',
                component: BillingDetailsComponent,
                outlet: 'checkOutlet'
            },
            {
                path: 'result',
                component: ResultComponent,
                outlet: 'checkOutlet'
            }
        ]
    }
];

@NgModule({
imports: [RouterModule.forChild(checkoutRoutes)],
exports: [RouterModule]
})
export class CheckoutRoutingModule {}
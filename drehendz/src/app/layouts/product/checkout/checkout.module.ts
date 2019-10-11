import { CommonModule } from "@angular/common";
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckoutRoutingModule } from './checkout.routing';
import { CheckoutComponent } from './checkout.component';
import { NgModule } from '@angular/core';
import { CheckoutNavbarComponent } from './checkout-navbar/checkout-navbar.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ResultComponent } from './result/result.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
    imports: [CommonModule, SharedModule,CheckoutRoutingModule],
    declarations: [
        CheckoutComponent,
        ProductsComponent,
        CheckoutNavbarComponent,
        ShippingDetailsComponent,
        BillingDetailsComponent,
        ResultComponent
    ],
    exports: [CheckoutComponent]
})
export class CheckoutModule{}
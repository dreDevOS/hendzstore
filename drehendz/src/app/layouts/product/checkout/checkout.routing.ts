import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from 'angular-bootstrap-md';
import { AuthGuard } from 'src/app/shared/services/auth_guard';
import { ProductComponent } from '../product.component';
import { NgModule } from '@angular/core';

export const checkoutRoutes: Routes = [
    {
        path: 'checkouts',
        component: CheckboxComponent,
        canActivate: [AuthGuard], 
        children: [
            {
                path: '',
                component: ProductComponent,
                outlet: 'checkOulLet'
            },
            {
                
            }
        ]
    }
];

@NgModule({
imports: [RouterModule.forChild(checkoutRoutes)],
exports: [RouterModule]
})
export class CheckoutRoutingModule {}
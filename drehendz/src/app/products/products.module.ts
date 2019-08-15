import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { ProductRoutes } from './product.routing';
import { AddProductComponent } from './add-product/add-product.component';






@NgModule ({
imports: [CommonModule, RouterModule.forChild(ProductRoutes) ],

declarations: [
     ProductsComponent,
     FeatureProductComponent,
     AddProductComponent
    ],

exports: [FeatureProductComponent]

}) 

export class ProductsModule{}
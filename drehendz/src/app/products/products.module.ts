import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { ProductRoutes } from './product.routing';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';






@NgModule ({
imports: [CommonModule, RouterModule.forChild(ProductRoutes) ],

declarations: [
     ProductsComponent,
     FeatureProductComponent,
     CardListComponent,
     CardComponent,
    ],

exports: [FeatureProductComponent]

}) 

export class ProductsModule{}
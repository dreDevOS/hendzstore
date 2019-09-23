import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product.component';
import { BestProductComponent } from './best-product/best-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';



@NgModule({
    imports: [CommonModule, RouterModule.forChild(ProductRoutes), SharedModule],
    declarations: [ProductComponent,
		BestProductComponent,
		ProductListComponent,
		AddProductComponent,
		ProductDetailComponent,
		FavoriteProductsComponent,],
    exports: [BestProductComponent]
})
export class ProductModule {}
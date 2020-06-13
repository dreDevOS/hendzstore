import { CartProductsComponent } from './cart-products/cart-products.component';
import { FavoriteProductsComponent } from './favorite-products/favorite-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes } from '@angular/router';
import { IndexComponent } from '../../index/index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AuthGuard } from 'src/app/shared/services/auth_guard';
import { AddProductComponent } from 'src/app/admin/add-product/add-product.component';

export const ProductRoutes: Routes = [
	{
		path: 'products',
		children: [
			{
				path: '',
				component: IndexComponent
			},
			{
				path: 'all-products',
				component: ProductListComponent
			},
			{
				path: 'favorite-products',
				component: FavoriteProductsComponent
			},
			{
				path: 'cart-items',
				component: CartProductsComponent
			},
			{
				path: 'checkouts',
				loadChildren: './checkout/checkout.module#CheckoutModule'
			},
			{
				path: 'product/:id',
				component: ProductDetailComponent
			},
			{
				path: 'my-orders',
				component: MyOrdersComponent,
				canActivate: [AuthGuard]
			},
			{
				path: 'order-success',
				component: OrderSuccessComponent,
				canActivate: [AuthGuard]
			},
			{
				path: 'add-product',
				component: AddProductComponent
			}
		]
	}
];
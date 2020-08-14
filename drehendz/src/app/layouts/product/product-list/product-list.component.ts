import { Component, OnInit, Input } from '@angular/core';
import{ShoppingCartService} from '../../../shared/services/shopping-cart.service'




@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent  {
// productList: Product [];
// loading = false;
// brands = ['All', 'Boohoo', 'Charlotte Russe', 'Delicacy']
// selectedBrand: 'All';
// page= 1;
// categories: Observable<any[]>;
@Input('product') product: any = [];
@Input('shoppingCart') shoppingCart;

  constructor(
    private cartService: ShoppingCartService ){ }
  
  addToCart(){
    this.cartService.addToCart(this.product);
  }


//   getAllProducts() {
//       this.loading = true;
//     const x = this.productService.getProducts ();
//   x.snapshotChanges().subscribe(
//     (product) => {this.loading =false;
//     this.productList = [];
//   product.forEach((element) => {const y = element.payload.toJSON();
//     y['$key'] = element.key;
//   this.productList.push(y as Product);
//  });
// }


  //);
  //}
  // addFavorite(product: Product) {
	// 	this.productService.addFavoriteProduct(product);
  // }
  // addToCart(product: Product) {
  //  //  this.cartService.addToCart(product);
  //    this.productService.addToCart(product);
  // }
  // removeProduct(key: string) {
  //   if(!confirm('are you sure you want to delete this product')) return;
	// 	this.productService.deleteProduct(key);
  // }

  

}
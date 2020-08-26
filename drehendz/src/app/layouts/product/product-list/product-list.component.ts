import { Component, OnInit, Input } from '@angular/core';
import{ShoppingCartService} from '../../../shared/services/shopping-cart.service'




@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent  {

@Input('product') product: any = [];
@Input('shoppingCart') shoppingCart;

  constructor(private cartService: ShoppingCartService ){ }
  
  addToCart(){
    this.cartService.addToCart(this.product);
  }

  getQuantity(){
    if (!this.shoppingCart ) {return 0; }; 
    let item = this.shoppingCart.items[this.product.key];
    return item ? item.qauntity:  0;
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

}
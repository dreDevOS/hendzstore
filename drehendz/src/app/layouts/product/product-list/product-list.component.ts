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



}
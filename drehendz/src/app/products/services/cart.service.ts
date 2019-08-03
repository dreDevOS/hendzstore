import { Injectable } from '@angular/core';
import { UPDATE_CART } from 'src/app/redux/actions/action';
import { ProductModel } from 'src/app/models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(  )
   { }

   add(product: ProductModel, qty: number) : void 
   {let cartIndex = this.getCartIndex(product); 
     if (cartIndex >=0) {this.incrementCartQty(cartIndex);
    this.store.dispatch({type: UPDATE_CART, payload: {cart: this.carts}})} }
}

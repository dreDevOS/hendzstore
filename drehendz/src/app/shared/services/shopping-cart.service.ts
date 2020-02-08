import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Product} from '../models/product';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  item: Observable<any>;

  constructor(private db: AngularFireDatabase) { }

  private create (){
    return this.db.list('/shopping-carts/').push({
      dateCreated: new Date().getTime()
    })
  }


private getCart(cartId: string) {
  return this.db.object('/shopping-carts/' + cartId);
 
}
private getItem(cartId: string, product: string) {
  return this.db.object('/shopping-carts/' + cartId + '/items/' + product);
}

private async  getOrCreateCartId(){
let cartId = localStorage.getItem('cartId');
if(cartId) return cartId;
 

let result = await this.create();
  localStorage.setItem('cartId', result.key);
  return result.key;
}


 async  addToCart(product: Product){
   
        let cartId = await this.getOrCreateCartId();
        let item =   this.getItem(cartId, product.$key);
       
        
 }
     
}

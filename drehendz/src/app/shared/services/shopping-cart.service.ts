import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import {Product} from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: AngularFireList<Product>;
  product: AngularFireObject<Product>;


  navbarCartCount = 0;

  constructor(private db: AngularFireDatabase)
   {
    this.calculateLocalCartProdCounts();

    }

  private create (){
    return this.db.list('/shopping-carts/').push({
      dateCreated: new Date().getTime()
    });
  }


private getCart(cartId: string) {
  return this.db.object('/shopping-carts/' + cartId);
 
}
private getItem(cartId: string, product: string) {
  return this.db.object('/shopping-carts/' + cartId + '/items/' + product);
}

private async getOrCreateCartId(){
let cartId = localStorage.getItem('cartId');
if(cartId) return cartId;
 

let result = await this.create();
  localStorage.setItem('cartId', result.key);
  return result.key;
}



  addToCart(product: Product): void {
    let a: Product[];

   a= JSON.parse(localStorage.getItem('cartId')) || [];
    a.push(product);
    
    setTimeout(()   => {
        localStorage.setItem('cartId', JSON.stringify(a));
        this.calculateLocalCartProdCounts();

    }, 500);

    

   

  
}
  calculateLocalCartProdCounts() {
    this.navbarCartCount = this.getLocalCartProducts().length;
  }
  getLocalCartProducts() {
    const products: Product [] = JSON.parse(localStorage.getItem('cartId')) || [];
   
    return products; 
  
  }

  // remove cart products from the same cart Id 
  // removeLocalCartProduct(product: Product) {
  //   const products: Product[] = JSON.parse(localStorage.getItem('cartId'));

  //     for (let i = 0; i<products.length; i++) {
  //      if (products [i].productId === product.productId) {
  //       products.splice(i, 1);
  //       break;
  //      }
            
  //  }
// localStorage.setItem('cartId' , JSON.stringify(products));
//  this.calculateLocalCartProdCounts();

//   }
     
}

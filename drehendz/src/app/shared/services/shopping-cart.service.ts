import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { IShoppinCart } from '../models/IShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts/').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;


    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async getcart(): Promise<AngularFireObject<IShoppinCart>> {
    let cartID = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartID);

  }

  private getItem(cartId: string, productID: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productID);
  }

  async addToCart(product) {
    this.updateToCart(product, 1);
  }

  async removeFromCart(product) {
    this.updateToCart(product, -1);
  }

  async updateToCart(product, quantityState) {
    let cartId = await this.getOrCreateCartId();

    let items$ = this.getItem(cartId, product.key);

    items$.snapshotChanges().take(1).subscribe((item: any) => {
      if (item.payload.exists()) {
        items$.update({ quantity: item.payload.val().quantity + quantityState });
      }
      else {
        items$.update({
          product: {

            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imageUrl: product.payload.val().imageUrl
          }
          , quantity: 1
        });
      }
    })

  }

}

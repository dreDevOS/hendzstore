import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';



@Injectable()
export class ProductService implements OnInit{


    // products: AngularFireList<Product>;
    // product: AngularFireObject<Product>;

    // favoriteProducts: AngularFireList<FavoriteProduct>;
    // cartProducts: AngularFireList<FavoriteProduct>

    // navbarCartCount = 0;
    // navbarFavProdCount = 0;

    constructor(
        private db: AngularFireDatabase) {
        // this.calculateLocalFavProdCounts();
        // this.calculateLocalCartProdCounts();
    }

  
  ngOnInit(){
//      this.getAll();
  }
    create(product) {
         return this.db.list('/productsnew').push(product);
    }

 get(){
    return this.db.list('/productsnew').snapshotChanges();
}
getById(productID: string) {
    return this.db.object('/productsnew/' + productID).valueChanges();
  }

  update(productID: string, product) {
      return this.db.object('/productsnew/' + productID).update(product);
  }

  delete(productID: string){
 return this.db.object('/prductsnew/' + productID).remove();       
}
    // getAll() {
    //     return this.db.list('/products').snapshotChanges().pipe(map(changes => changes.map(c => ({ $key: c.payload.key, $value: c.payload.val()}))));

    // }
    

    // get(productId){
    //     return this.db.object('/products/id' + productId).snapshotChanges();

    // }



  // update(productId, product){
    //     return this.db.object('/products/' + productId).update(product)

    // }

    // createProduct(data: Product) {
    //     this.products.push(data);
    // }
   

    





    // getUsersFavoriteProducts(){
    //     const user = this.authService.getLoggedInUser();
    //     this.favoriteProducts = this.db.list('favoriteProducts', 
    //     (ref)  =>  ref.orderByChild('userId')
    //     .equalTo(user.$key) );
    //     return this.favoriteProducts;
    // }


    //     addFavoriteProduct(data: Product): void {
    //         let a: Product [];
    //         a = JSON.parse(localStorage.getItem('avf_item')) || [];
    //         a.push(data);
    //           setTimeout(() => {
    //           localStorage.setItem('avf_item', JSON.stringify(a));
    //           this.calculateLocalFavProdCounts();
    //         }, 1500);
    //     }

    // getLocalFavoriteProducts(): Product[] {
    //     const products: Product [] = JSON.parse(localStorage.getItem('avf_item')) || [];

    //     return products;
    // }

    // removeFavorite(key: string){
    //     this.favoriteProducts.remove(key);
    // }

    // removeLocalFavorite(product: Product) {
    //     const products: Product[] = JSON.parse(localStorage.getItem('avf-item')) || [];

    //     for (let i = 0; i < products.length;  i++) {
    //         if (products[i].productId === product.productId) {
    //             products.splice(i,1);
    //             break;
    //         }
    //     }

    //     localStorage.setItem('avf_item', JSON.stringify(products));

    // this.calculateLocalFavProdCounts();
    // }

    // calculateLocalFavProdCounts() {
    //     this.navbarFavProdCount = this.getLocalFavoriteProducts().length
    // }


    // addToCart(product: Product): void {
    //     let a: Product[];

    //    a= JSON.parse(localStorage.getItem('cartId')) || [];
    //     a.push(product);

    //     setTimeout(()   => {
    //         localStorage.setItem('cartId', JSON.stringify(a));
    //         this.calculateLocalCartProdCounts();

    //     }, 500);


    // }

    //     getLocalCartProducts(): Product[] {
    //         const products: Product [] = JSON.parse(localStorage.getItem('cartId')) || [];

    //         return products;
    //     }

    //     calculateLocalCartProdCounts(){
    //         this.navbarCartCount = this.getLocalCartProducts().length;
    //     }

    //     removeLocalCartProduct(product: Product) {
    //         const products: Product[] = JSON.parse(localStorage.getItem('cartId'));
    //          console.log(products);

    //           for (let i = 0; i<products.length; i++) {
    //            if (products [i].productId === product.productId){
    //             products.splice(i, 1);
    //             break;
    //            }
    //        }
    //        localStorage.setItem('cartId', JSON.stringify(products));

    // 		this.calculateLocalCartProdCounts();


    //       }

}

// export class FavoriteProduct {
//     product: Product;
//     productId: string;
//     userId: string;
// }
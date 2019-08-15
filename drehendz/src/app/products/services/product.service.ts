import {Injectable} from '@angular/core';
import {AngularFireList, AngularFireObject} from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';
import { Product } from '../product';
import { AuthService } from 'src/app/auth/auth.service';






@Injectable()
export class ProductService 
{
    products: AngularFireList<Product>;
    product: AngularFireObject<Product>;

    constructor(private db: AngularFireDatabase,
        private authService: AuthService
          )
          {
              
          }

          getProducts()
          {
              this.products = this.db.list('products');
              return this.products;
          }
          createProduct(data: Product){this.products.push(data)}
}
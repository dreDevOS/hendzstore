import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import {AuthService} from '../../../auth/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {
productList: Product [];
loading = false;
brands = ['All', 'Boohoo', 'Charlotte Russe', 'Delicacy']
selectedBrand: 'All';
page= 1;
categories: Observable<any[]>;

  constructor(
    private productService: ProductService,
    public authService: AuthService,
    public categoryService: CategoryService,
    private db: AngularFireDatabase
    )
     { 
      
      
     }

  ngOnInit() {
    this.getAllProducts();

  }



  getAllProducts() {
      this.loading = true;
    const x = this.productService.getProducts ();
  x.snapshotChanges().subscribe(
    (product) => {this.loading =false;
    this.productList = [];
  product.forEach((element) => {const y = element.payload.toJSON();
    y['$key'] = element.key;
  this.productList.push(y as Product);
 });
}


  );
  }
  addFavorite(product: Product) {
		this.productService.addFavoriteProduct(product);
  }
  addToCart(product: Product) {
   //  this.cartService.addToCart(product);
     this.productService.addToCart(product);
  }
  removeProduct(key: string) {
    if(!confirm('are you sure you want to delete this product')) return;
		this.productService.deleteProduct(key);
  }

  

}
import { Component, OnInit } from '@angular/core';
import {Product} from '../../../shared/models/product';
import {ProductService} from '../../../shared/services/product.service';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss']
})
export class FavoriteProductsComponent implements OnInit {
  favoriteProducts: Product [];
  showDataNotFound = true;

  //Not Found Message
  messageTitle = 'No Favorite Products Found';
  messageDescription = 'Please, choose your favorite products';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.getFavoriteProduct();
  }
// getFavoriteProduct(){
//   this.favoriteProducts = this.productService.getLocalFavoriteProducts();
// }
// removeFavorite(product: Product) {
//   this.productService.removeLocalFavorite(product);

  // this.getFavoriteProduct();
}


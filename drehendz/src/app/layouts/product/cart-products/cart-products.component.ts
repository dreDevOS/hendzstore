import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss']
})
export class CartProductsComponent implements OnInit {
  cartProducts: Product [];
  showDataNotFound = true;

  // Not Found Message
  messageTitle = 'No Products Found in Cart';
	messageDescription = 'Please, Add Products to Cart';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCartProduct();
  }
  removeCartProduct(product: Product) {
    this.productService.removeLocalCartProduct(product);
    
    this.getCartProduct()
    }

    getCartProduct(){
      this.cartProducts = this.productService.getLocalCartProducts();
    }
}

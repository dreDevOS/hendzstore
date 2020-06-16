import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  checkoutProducts: Product[];

  totalPrice = 0;

 constructor(productService: ProductService) {
  document.getElementById('shippingTab').style.display = 'none';
  document.getElementById('billingTab').style.display = 'none';
  document.getElementById('resultTab').style.display = 'none';

 // const products = productService.getLocalCartProducts();

  // this.checkoutProducts = products;

  // products.forEach((product)  =>   {
  //   this.totalPrice +=product.productPrice;
  //})

  }

  ngOnInit() {
  }

}

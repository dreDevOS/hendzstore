import { Component, OnInit } from '@angular/core';
import { User, UserDetail } from 'src/app/shared/models/user';
import { Product } from 'src/app/shared/models/product';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShippingService } from 'src/app/shared/services/shipping.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {

  userDetails: User;

  userDetail: UserDetail;

  products: Product[];

  constructor(
    authService: AuthService,
    private shippingService: ShippingService,
    productService: ProductService,
    private router: Router) {
    document.getElementById('productsTab').style.display = 'none';
		document.getElementById('shippingTab').style.display = 'block';
		document.getElementById('productsTab').style.display = 'none';
    document.getElementById('resultTab').style.display = 'none';
    
    this.userDetail = new UserDetail();
		this.products = productService.getLocalCartProducts();
		this.userDetails = authService.getLoggedInUser();
     }

  ngOnInit() {
  }

  updateUserDetails(form: NgForm) {
    const data = form.value;


    data['emailId'] = this.userDetail.emailId;
    data['userId'] = this.userDetail.$key;
    const products = [];


    let totalPrice = 0;

    this.products.forEach((product)  => {
      delete product['$key'];
      totalPrice += product.productPrice;
      products.push(product);
    } );

    
    data [ 'products'] = products;


    data ['totalPrice'] = totalPrice;

    data ['shippingDate'] = Date.now();

    this.shippingService.createshippings(data);

    this.router.navigate(['checkouts', {outlets: {checkOutelet: ['billing-details'] }}]);
  }

}

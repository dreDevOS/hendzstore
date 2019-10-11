import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { User, UserDetail } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';
import {BillingService} from '../../../../shared/services/billing.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit {
  userDetails: User;
  products: Product [];
  userDetail: UserDetail;

  constructor(
    authService: AuthService,
    private billingService: BillingService,
    productService: ProductService,
    private router: Router
    ) { 
      document.getElementById('productsTab').style.display = 'none';
		document.getElementById('shippingTab').style.display = 'none';
		document.getElementById('billingTab').style.display = 'block';
    document.getElementById('resultTab').style.display = 'none';
    
    this.userDetail = new UserDetail();
		this.products = productService.getLocalCartProducts();
		this.userDetails = authService.getLoggedInUser();
    }

  ngOnInit() {
  }
  updateUserDetails(form: NgForm) {
		const data = form.value;

		data['emailId'] = this.userDetails.emailId;
		data['userId'] = this.userDetails.$key;
		let totalPrice = 0;
		const products = [];
		this.products.forEach((product) => {
			delete product['$key'];
			totalPrice += product.productPrice;
			products.push(product);
		});

		data['products'] = products;

		data['totalPrice'] = totalPrice;

		data['billingDate'] = Date.now();

		this.billingService.createBillings(data);

		this.router.navigate([ 'checkouts', { outlets: { checkOutlet: [ 'result' ] } } ]);

  }
}

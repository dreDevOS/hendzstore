import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';



// declare var $: any;
// declare var require: any;
// declare var toastr: any;
// const shortId = require('shortid');
// const moment = require('moment');

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  // product: Product = new Product();
 categories$;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
    
  }



  ngOnInit() { }


  // createProduct(productForm: NgForm) {
  //   productForm.value['productId'] = 'PROD_' + shortId.generate();
  //   productForm.value['productAdded'] = moment().unix();
  //   productForm.value['ratings'] = Math.floor(Math.random() * 5 + 1);
  //   if (productForm.value['productImageUrl'] === undefined) {
  //     productForm.value['productImageUrl'] = 'http://via.placeholder.com/640x360/007bff/ffffff';
  //   }

  //   productForm.value['favorite'] = false;

  //   const date = productForm.value['productAdded'];


  //   this.productService.createProduct(productForm.value);

  //   this.product = new Product();

  //   $('#exampleModalLong').modal('hide');

  //   toastr.success('product' + productForm.value['productName'] + 'is added successfully ', 'Product Creation');

  // }

}
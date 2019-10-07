import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import {AuthService} from '../../../auth/auth.service';
import {ToastrService} from 'src/app/shared/services/toastr.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
productList: Product [];
loading = false;
brands = ['All', 'Apple', 'Samsung', 'LG', 'Victoria Seceret']

selectBrand: 'All';

page= 1;
  productService: any;

  constructor(
    public authService: AuthService,
    private toastrService: ToastrService,
    ) { }

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
},
(err) => {
  this.toastrService.error('Error while fetching Products', err);
}
  );
  }

}
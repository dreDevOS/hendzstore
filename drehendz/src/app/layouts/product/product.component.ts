import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product [] = [];
  category: string;
  constructor(
    route: ActivatedRoute,
    private productService: ProductService) {
      

    // productService.getAll().switchMap(products => {
    // //  this.products =products;
    //   return route.queryParamMap;})
    //   .subscribe(params => {
    //   this.category = params.get('category');
    //    this.filteredProducts = (this.category) ?
    //    this.products.filter(p => p.category === this.category) :
    //    this.products;
    // });

   

    
  }

  ngOnInit() {
  }

}

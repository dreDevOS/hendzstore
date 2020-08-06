import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import 'rxjs/add/operator/switchMap';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {


  products: any[] = [];
  filteredProducts: any[] = [];
  categories$;
  category = '';
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.subscription = this.productService
      .get().switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      // read values of query string
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.payload.val().category === this.category) : this.products;
      })


    this.categories$ = categoryService.getCategories();
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
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    // this.productService.get().subscribe(products => {
    //   this.products = products
    // });

  }


}

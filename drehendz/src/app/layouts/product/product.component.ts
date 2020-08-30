import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

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
  cart;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService

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

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async ngOnInit() {

    this.subscription = (await this.cartService.getcart()).snapshotChanges().subscribe(cart => { this.cart = cart.payload.val();
       //console.log(cart) 
      })

  }


}

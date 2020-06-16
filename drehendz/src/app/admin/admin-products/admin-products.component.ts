import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products$;
  // filteredProducts: any[];
  // subscription: Subscription;


  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

  // filter(query: string) {
  //   console.log(query);
  //   this.filteredProducts = (query) ?
  //     (this.products.filter(p => p.$key.toLowerCase().includes(query.toLowerCase()))) :
  //     (this.products);
  // }
  //   ngOnDestroy() {
  //  this.subscription.unsubscribe()
  //   }


  ngOnInit() { }


}

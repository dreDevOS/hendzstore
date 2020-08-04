import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnDestroy {
  //products$;
  filteredProducts: any[];
  subscribe: Subscription;
  products : any [];

  constructor(private productService: ProductService) {
  this.subscribe = this.productService.get().subscribe(products => this.filteredProducts = this.products = products);
  }
  

  filter(queryString: string) {
    if(queryString){
      this.filteredProducts = this.products.filter(p => p.payload.val().title.toLowerCase().includes(queryString.toLocaleLowerCase()))
    }
    else{
      this.filteredProducts = this.products;
    }
  
    
   

  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}

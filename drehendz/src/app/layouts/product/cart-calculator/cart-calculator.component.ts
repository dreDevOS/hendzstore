import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-cart-calculator',
  templateUrl: './cart-calculator.component.html',
  styleUrls: ['./cart-calculator.component.scss']
})
export class CartCalculatorComponent implements OnInit {

  @Input() products: Product[];

  totalValue = 0;


  constructor() { }

  ngOnChNGES(changes: SimpleChanges) {
    const dataChanges: SimpleChange = changes.products;

    const products: Product[]= dataChanges.currentValue;
    this.totalValue = 0;
    products.forEach ((product)  => {
      this.totalValue += product.productPrice;

    });
    
  }

  ngOnInit() {
  }

}

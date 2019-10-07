import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrls: ['./best-product.component.scss']
})
export class BestProductComponent implements OnInit {

  bestProducts: Product [] = [];
  options: any;
  loading = false;

  constructor(
    private toastrService: ToastrService,
    ) { }


  ngOnInit() {
    this.options = {
      dots: false,
      responsive: {
        '0': {items: 1, margin: 5},
        '430': {items:2, margin: 5},
        '550': {items:3, margin: 5},
        '670': {items:4, margin: 5}
      },
      autoplay: true,
      loop: true,
      autoplayTimeout: 3000,
      lazyLoad: true
    };
    
  }
  

}

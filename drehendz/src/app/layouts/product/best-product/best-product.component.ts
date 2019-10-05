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
    private productService: ProductService,
    private toastrService: ToastrService,
    ) { }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Products } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  productList: Products [];
  loading = false;
  catergories = ['All', 'Beachwear', 'Apparel', 'Mobile Device'];
 
 
  selectedBrands: 'All';

  page =1;

  constructor
  (
    ) { }

  ngOnInit() {
    
  }





}

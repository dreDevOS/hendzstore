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

  constructor(
    public authService: AuthService,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.getAllProducts();

  }
  getAllProducts() {
    throw new Error("Method not implemented.");
  }

}
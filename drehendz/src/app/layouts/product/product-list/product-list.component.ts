import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import {AuthService} from '../../../auth/auth.service';
import {ToastrService} from 'src/app/shared/services/toastr.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
productList: Product [];
//filteredProducts : any;
loading = false;
brands = ['All', 'drehendz', 'Apple' ]
selectedBrand: 'All';


page= 1;

  constructor(
    private productService: ProductService,
    public authService: AuthService,
    private toastrService: ToastrService,
    private cartService: ShoppingCartService,
    private categoryService: CategoryService
    ) { 
    }

  ngOnInit() {
    this.getAllProducts();

  }
  filterByBrand(query: string){
    //this.filteredProducts = (query) ? 
    this.productList.filter(p => p.productName.toLowerCase().includes(query.toLowerCase())) 
    this.productList;
    console.log(query);
  }
  getAllProducts() {
      this.loading = true;
    const x = this.productService.getProducts ();
  x.snapshotChanges().subscribe(
    (product) => {this.loading =false;
    this.productList = [];
  product.forEach((element) => {const y = element.payload.toJSON();
    y['$key'] = element.key;
  this.productList.push(y as Product);
 });
}


  );
  }
  addFavorite(product: Product) {
		this.productService.addFavoriteProduct(product);
  }
  addToCart(product: Product) {
		this.cartService.addToCart(product);
  }
  removeProduct(key: string) {
    if(!confirm('are you sure you want to delete this product')) return;
		this.productService.deleteProduct(key);
	}
}
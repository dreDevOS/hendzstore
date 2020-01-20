import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'src/app/shared/services/toastr.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  private sub: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastrService: ToastrService
  ) { 
    this.product = new Product();

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params)  => {
      const id = params ['id']; //(+) converts string 'id' to a number
      this.getProductDetail(id);

    });

  }
getProductDetail(id: string) {
  const x = this.productService.getProductById(id)
  x.snapshotChanges().subscribe(
    (product) => {
      const y = product.payload.toJSON()as Product;

      y['key'] = id;
      this.product = y;

    },
   
  );
}

addToCart(product: Product) {
  this.productService.addToCart(product);

}
ngOnDestroy(){
  this.sub.unsubscribe();
}
}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { map } from 'rxjs/operators';


// declare var $: any;
// declare var require: any;
// declare var toastr: any;
// const shortId = require('shortid');
// const moment = require('moment');

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product = {};
  categories$;
  category: string;
  id;
  products$;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    //private afs: AngularFirestore 
  ) {
         this.categories$ = this.categoryService.getCategories();
         this.id = this.route.snapshot.paramMap.get('id');
        if(this.id){
          this.productService.getById(this.id).take(1).subscribe(p => this.product = p);
        }
         //this.products$ = this.productService.getAll();


    // this.categories$= this.afs.collection("categories");
    //.snapshotChanges().map(actions => {
    //    return actions.map(a => {
    //      const data = a.payload.ref;
    //      const id = a.payload.key;
    //      return {id, ...data}
    //    });
    //  });
    // //.map(actions => {
    //   return actions.map(a => {

    //   } )
    // })
    // console.log(categoryService.getCategories());

    // this.id = this.route.snapshot.queryParamMap.get('id');
    // if (this.id) this.productService
    //   //.get(this.id)
    //   .take(1)
    //   .subscribe(p => this.product = p);

  }
  ngOnInit() { }
  save(product) 
  {
    if(this.id){
      this.productService.update('/productsnew/' , product);
    }
    else{
      this.productService.create(product);
    }
     
    this.router.navigate(['/admin-products']);
    console.log(product);
  }
 delete(){
if(confirm('are you sure you want to delete this item')){
  this.productService.delete(this.id);
}
this.router.navigate(['/admin-products']);
 }




  // createProduct(productForm: NgForm) {
  //   productForm.value['productId'] = 'PROD_' + shortId.generate();
  //   productForm.value['productAdded'] = moment().unix();
  //   productForm.value['ratings'] = Math.floor(Math.random() * 5 + 1);
  //   if (productForm.value['productImageUrl'] === undefined) {
  //     productForm.value['productImageUrl'] = 'http://via.placeholder.com/640x360/007bff/ffffff';
  //   }

  //   productForm.value['favorite'] = false;

  //   const date = productForm.value['productAdded'];


  //   this.productService.createProduct(productForm.value);

  //   this.product = new Product();

  //   $('#exampleModalLong').modal('hide');

  //   toastr.success('product' + productForm.value['productName'] + 'is added successfully ', 'Product Creation');

  // }

}

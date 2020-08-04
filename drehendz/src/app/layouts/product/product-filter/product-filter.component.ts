import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  @Input ('category') category;

  constructor(catergoryService: CategoryService) { 
    this.categories$ = catergoryService.getCategories();//.snapshotChanges();

  }

  

  ngOnInit() {
  }

}

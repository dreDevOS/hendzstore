import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import{Category} from './../models/category';

@Injectable({

providedIn: 'root'

})

export class CategoryService {
private dbPath = '/categories'
categoryRef: AngularFireList<Category> = null;


constructor(private db: AngularFireDatabase) {
  this.categoryRef = db.list(this.dbPath);
 }

 createCatergory(category: Category): void {
   this.categoryRef.push(category);
 }

getCategories (): AngularFireList<Category> {

   return this.categoryRef;
   
}

}
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category: any;


  constructor( private db: AngularFireDatabase) { }

  getAll(){
     this.db.list('/categories');
     return this.category;
  }

}

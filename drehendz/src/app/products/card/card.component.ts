import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {AuthService} from '../../auth/auth.service';
import {ProductService} from '../../products/services/product.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

 
  product: Observable<any[]>;
  
  

  constructor(db: AngularFirestore ) 
  {
    this.product = db.collection('product').valueChanges();

   }

  ngOnInit() {
  }

  

}

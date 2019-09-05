import {Injectable} from '@angular/core';
import {AngularFireList, AngularFireObject} from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';
import { Product } from '../product';
import { AuthService } from 'src/app/auth/auth.service';
import {throwError as ObservableThrowError, empty as ObservableEmpty, Observable } from 'rxjs';

export interface Product 
{
    id: string;
    catergoryId: string;
    title: string;
    price: number;
    isSpecial: boolean;
    desc: string;
    imageS: string;
    imageL: string;

}


@Injectable()
export class ProductService 
{
    products: AngularFireList<Product>;
    product: AngularFireObject<Product>;

    constructor(private db: AngularFireDatabase,
        private authService: AuthService
          )
          {
              
          }

          getProducts(catergory?: string, search?: string): Observable<any>
          {
              if (catergory || search)
            {
                let query = <any>{};
                if(catergory)
                {
                    return 
                    
                }
                else {}
            }
            else {return ObservableEmpty();
            }
            
          
          }
          
}

import {Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from './products.component';




export const ProductRoutes: Routes =  
[

{   path:'products',
     children:
 

[ 
    {path: '', component: HomeComponent}, 
    {path: 'all-products', component:ProductsComponent},
    {path: ''}
] 


}

]
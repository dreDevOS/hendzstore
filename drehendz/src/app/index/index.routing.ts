import {IndexComponent} from "./index.component";
import {Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ProductComponent } from '../layouts/product/product.component';


export const IndexRoutes: Routes = 
[
    {path:"", children: [ 
        {path:"", component: ProductComponent},
        {path:"login", component: LoginComponent  }
    ] }
];
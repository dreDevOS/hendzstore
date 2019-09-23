import {IndexComponent} from "./index.component";
import {Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';


export const IndexRoutes: Routes = 
[
    {path:"", children: [ 
        {path:"", component: IndexComponent},
        {path:"login", component: LoginComponent  }
    ] }
];
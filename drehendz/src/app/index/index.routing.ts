import {IndexComponent} from "./index.component";
import {Routes} from "@angular/router";


export const IndexRoutes: Routes = 
[
    {path:"", children: [ 
        {path:"", component: IndexComponent},
        {path:"", }
    ] }
]
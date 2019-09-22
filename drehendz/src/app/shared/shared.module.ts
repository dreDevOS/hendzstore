import {NgModule} from "@angular/core";
import {NgxPaginationModule} from "ngx-pagination";
import { FilterByBrandPipe } from './pipes/filterByBrand.pipe';
import {OwlModule } from "ngx-owl-carousel";


@NgModule({
    imports: [NgxPaginationModule, OwlModule],
    declarations: [FilterByBrandPipe],
    exports: [NgxPaginationModule, FilterByBrandPipe, OwlModule],
    providers: []
})
export class SharedModule{}
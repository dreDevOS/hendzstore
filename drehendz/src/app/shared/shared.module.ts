import {NgModule} from "@angular/core";
import {NgxPaginationModule} from "ngx-pagination";
import { FilterByBrandPipe } from './pipes/filterByBrand.pipe';
import {OwlModule } from "ngx-owl-carousel";
import { AgmCoreModule } from "@agm/core";
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from 'angularfire2';
import { FireBaseConfig } from 'src/environments/firebaseConfig';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {  RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from './services/auth_guard';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import {AdminGaurd} from '../../app/shared/services/admin-guard';

@NgModule({
    imports: [
        RouterModule,
        NgxPaginationModule,
        AngularFireAuthModule,AngularFireDatabaseModule,
         FormsModule,
         AngularFireModule.initializeApp(FireBaseConfig), 
         HttpClientModule ,
         OwlModule, 
         AgmCoreModule.forRoot({apiKey:" AIzaSyBcRdcmeKxUzSj9artsU4xGYGDF5vz9cJc "})],
    declarations: [FilterByBrandPipe],
    exports: [NgxPaginationModule, 
        FilterByBrandPipe, 
        OwlModule, 
        AngularFireModule,
		AngularFireAuthModule,
        AngularFireDatabaseModule,
        FormsModule,
        RouterModule,
        AgmCoreModule, ] ,
    providers: [AuthService, AuthGuard, AdminGaurd, ProductService, UserService, FormBuilder]
})
export class SharedModule{}
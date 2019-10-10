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
import { NoAccessComponent } from './components/no-access/no-access.component';
import { CardLoaderComponent } from './components/card-loader/card-loader.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import  {NoProductsFoundComponent} from "./components/no-products-found/no-products-found.component";
import  {MDBBootstrapModule} from "angular-bootstrap-md";
import  {NgxContentLoadingModule} from "ngx-content-loading";
import  { MomentTimeAgoPipe } from './pipes/moment-time-ago-pipe';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
@NgModule({
    imports: [ 
        CommonModule,
        RouterModule,
        MDBBootstrapModule.forRoot()  ,
        NgxPaginationModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
         FormsModule,
         AngularFireModule.initializeApp(FireBaseConfig), 
         HttpClientModule ,
         FormsModule,
         OwlModule, 
         AgmCoreModule.forRoot({apiKey:" AIzaSyBcRdcmeKxUzSj9artsU4xGYGDF5vz9cJc "}),
         NgxContentLoadingModule
        ],
    declarations: 
    [
        FilterByBrandPipe, 
        NoAccessComponent, 
        CardLoaderComponent, 
        PageNotFoundComponent,
        NoProductsFoundComponent,
         MomentTimeAgoPipe ],
    exports: 
    [ 
        MDBBootstrapModule,
        NgxPaginationModule, 
        FilterByBrandPipe, 
        OwlModule, 
        AngularFireModule,
		AngularFireAuthModule,
        AngularFireDatabaseModule,
        FormsModule,
        RouterModule,
        AgmCoreModule,
        NoAccessComponent,
        NoProductsFoundComponent,
        PageNotFoundComponent,
        MomentTimeAgoPipe,
        NgxContentLoadingModule,
        CardLoaderComponent,
  ] ,
    providers: [ AngularFirestore,   AuthService, AuthGuard, AdminGaurd, ProductService, UserService, FormBuilder]
})
export class SharedModule{}
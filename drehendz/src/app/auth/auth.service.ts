import { Injectable } from  '@angular/core';
import {Router, CanActivate} from "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth" ;
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Observable, from } from 'rxjs'; 





@Injectable()
 export class AuthGuard implements CanActivate 
 {
     constructor(private auth: AngularFireAuth, private router: Router){}

     canActivate(): Observable<boolean> {
        return Observable.from(this.auth)
          .take(1)
          .map(state => !!state)
          .do(authenticated => {
        if 
          (!authenticated) this.router.navigate([ '/sign-in' ]);
        })
      }
 }


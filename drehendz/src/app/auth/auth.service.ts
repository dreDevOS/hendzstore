import { Injectable } from  '@angular/core';
import {Router} from "@angular/router";
import {auth} from 'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth" ;
import { User } from  'firebase';
import { async } from '@angular/core/testing';
import { stringify } from 'querystring';
import { logging } from 'protractor';


@Injectable({
    providedIn:  'root'
})
export  class  AuthService {
     

    user: User;

    constructor(public  afAuth:  AngularFireAuth, public  router: Router ) 
    
    {

        this.afAuth.authState.subscribe(user  => 
            {
                if (user) 
                {
                    this.user = user;
                    localStorage.setItem('user', JSON.stringify(user));

                }
                else {
                    localStorage.setItem('user', null);
                }
            } )

     }
     async login(email: string, password: string ) { try 
        {
            await this.afAuth.auth.signInWithEmailAndPassword(email, password)
            this.router.navigate(['admin/list']);
        }
        catch (e) {alert("Error!" + e.message);
    }

    
    }
     async logout() {
         await this.afAuth.auth.signOut();
         localStorage.removeItem('user');
         this.router.navigate(['admin/login']);
     }
     get isloggedIn(): boolean 
     {
         const user = JSON.parse(localStorage.getItem("user"));
         return user !== null;
     }
}
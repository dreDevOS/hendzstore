import { Injectable } from  '@angular/core';
import { Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { AngularFireObject } from 'angularfire2/database';
import { AppUser } from '../models/user';



@Injectable({providedIn: 'root'})
export class AuthService
{
  user$: Observable<firebase.User>;
  userDetails: firebase.User = null;
  // loggedUser;
  // dbUser;

constructor(private afAuth: AngularFireAuth, 
            private route: ActivatedRoute,
            private userService: UserService)


{
  this.user$ = afAuth.authState;
  // this.dbUser = new User();
  // this.user.subscribe(user => 
  //   {
  //     if(user) {
  //       this.userDetails = user;
  //       userService
  //       .isAdmin(this.userDetails.email)
  //       .snapshotChanges()
  //       .subscribe(
  //         data => {
  //         data.forEach(el => {
  //           const y = el.payload.toJSON();
  //           this.dbUser = y;
  //         });
  //       });
  //     } else {this.userDetails = null;
  //     }

  //   });
}

isLoggedIn(): boolean {
  if(this.userDetails !== null) 
  {
    return true;
  }
}

// createUserWithEmailAndPassword(emailID: string, password: string) 
// {
//  return this.afAuth.auth.createUserWithEmailAndPassword(emailID, password )
// }
// sendVerification(){
//   return this.afAuth.auth.currentUser.sendEmailVerification()
 
// }

// getLoggedInUser(): User {
//   const loggedUser: User = new User();
//   const user = this.afAuth.auth.currentUser;
// if(user) 
// {
//   this.userDetails = user;
//   if(user != null) 
//   {
//     loggedUser.$key = user.uid;
//     loggedUser .userName = user.displayName;
//     loggedUser.emailId = user.email;
//     loggedUser.phoneNumber = user.phoneNumber;
//     loggedUser.avatar = user.photoURL;
//     loggedUser.isAdmin = this.dbUser["isAdmin"];

//   }
// } else {this.userDetails = null;}
// return loggedUser;
// }

// isAdmin(): boolean { 
//   const user = this.getLoggedInUser();
// if (user !=null) {
//   if (user.isAdmin === true) {
//     return true;
//   }
// }
// }

signInRegular(email, password) {
  const credential =  firebase.auth.EmailAuthProvider.credential(
  email, 
  password
  );
return this.afAuth.auth.signInWithEmailAndPassword(email, password);}

// signInWithGoogle()
// {
//   let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
//   return this.afAuth.auth.signInWithPopup(
//     new firebase.auth.GoogleAuthProvider()
//   );
// }
login(){
  let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  localStorage.setItem(returnUrl, 'returnUrl');
  this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

}

logout(){

  this.afAuth.auth.signOut();
  // this.loggedUser = null;
  // this.afAuth.auth.signOut().then(res =>this.router.navigate(["/"]) );
}

get appUser$(): Observable<AppUser>{
  return this.user$
    .pipe(switchMap(user => this.userService.get(user.uid).valueChanges()))
}

}
 
 


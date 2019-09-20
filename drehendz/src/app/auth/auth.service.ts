import { Injectable } from  '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/Rx';
import { Observable, of, merge} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { auth } from 'firebase';
import { error } from 'util';
import * as firebase from "firebase/app";
import { UserService } from '../user/services/user.service';








@Injectable({providedIn: 'root'})
export class AuthService
{user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  loggedUser;
  dbUser;
  logout: any;

constructor(private afAuth: AngularFireAuth,
  private afs: AngularFirestore,
  private router: Router,
  private userService : UserService)
{
  this.user = afAuth.authState;
  this.dbUser = new User();
  this.user.subscribe(user => 
    {
      if(user) {
        this.userDetails = user;
        userService.isAdmin(this.userDetails.email)
        .snapshotChanges()
        .subscribe(data => {
          data.forEach(el => {
            const y = el.payload.toJSON();
            this.dbUser = y;
          });
        });
      } else {this.userDetails = null;}
    });
}
isLoggedIn(): boolean {
  if(this.userDetails !== null) 
  {
    return true;
  }
}

createUserWithEmailAndPassword(emailID: string, password: string) 
{
  return this.afAuth.auth.createUserWithEmailAndPassword( emailID, password);
}

getLoggedInUser(): User {
  const loggedUser: User = new User();
  const user = this.afAuth.auth.currentUser;
if(user) 
{
  this.userDetails = user;
  if(user != null) 
  {
    loggedUser.$key = user.uid;
    loggedUser .userName = user.displayName;
    loggedUser.emailId = user.email;
    loggedUser.phoneNumber = user.phoneNumber;
    loggedUser.avatar = user.photoURL;
    loggedUser.isAdmin = this.dbUser["isAdmin"];

  }
} else {this.userDetails = null;}
return loggedUser;
}

isAdmin(): boolean { const user = this.getLoggedInUser();
if (user !=null) {
  if (user.isAdmin === true) {
    return true;
  }
}
}

signInRegular(email, password) 
{const credential =  firebase.auth.EmailAuthProvider.credential(email, password);
return this.afAuth.auth.signInWithEmailAndPassword(email, password);}

  async facebookSignin()
{
  const provider = new auth.FacebookAuthProvider
  const credential = await this.afAuth.auth.signInWithPopup(provider);
  return this.updateUserData(credential.user);
  }


async googleSignin()
{
  const provider = new auth.GoogleAuthProvider();
  const credential = await this.afAuth.auth.signInWithPopup(provider);
  return this.updateUserData(credential.user); 
}
async signOut(){
  await this.afAuth.auth.signOut();
  return this.router.navigate(['/signin'])
}
private updateUserData(user)
{
  const userRef : AngularFirestoreDocument<User> = this.afs.doc('/users/${user.uid}');

  const data = 
  {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL
  };

}

signInWithGoogle(){
  return this.afAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  );
}

}
 
 


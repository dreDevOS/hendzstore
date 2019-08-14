import { Injectable } from  '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/Rx';
import { Observable, of} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { auth } from 'firebase';







@Injectable({providedIn: 'root'})
export class AuthService{user$: Observable<any>;

constructor(private afAuth: AngularFireAuth,
  private afs: AngularFirestore,
  private router: Router)
{
  this.user$ = this.afAuth.authState.pipe(switchMap(user => {
    if (user) 
    {
      return this.afs.doc<User>('users/${user.uid}').valueChanges();
    }
    else{
      return of(null);
    }
  } ) )
}
async googleSignin()
{
  const provider = new auth.GoogleAuthProvider();
  const credential = await this.afAuth.auth.signInWithPopup(provider);
  return this.updateUserData(credential.user); 
}
async signOut(){
  await this.afAuth.auth.signOut();
  return this.router.navigate(['/home'])
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
  return userRef

}
}
 
 


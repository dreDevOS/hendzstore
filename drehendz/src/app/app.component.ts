import { Component } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
user: Observable<firebase.User>;
items: AngularFireList<any>;
msgVal: string = '';

constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase)
{
  this.items = af.list('/messages' );
  this.user = this.afAuth.authState;
}

login()
{
  this.afAuth.auth.signInAnonymously();
}
  
logout()
{
  this.afAuth.auth.signOut();
}
  
Send(desc: string)
{
  this.items.push  ({message: desc})
  this.msgVal = '';
}

}

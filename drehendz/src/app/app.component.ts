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
  public cards: Array<any> = [
    {text: 'Card 1'},
    {text: 'Card 2'},
    {text: 'Card 3'},
    {text: 'Card 4'},
    {text: 'Card 5'},
    {text: 'Card 6'},
    {text: 'Card 7'},
    {text: 'Card 8'},
    {text: 'Card 9'},
    {text: 'Card 10'},
  ];
  
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

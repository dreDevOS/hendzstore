import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) 
  {
    this.af.auth.onAuthStateChanged(auth => 
      
      {
        if(auth){this.router.navigateByUrl('/home');
      }
      });
   }

   

  ngOnInit() {
  }

}
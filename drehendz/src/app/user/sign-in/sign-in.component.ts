import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {  Router } from '@angular/router';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  error: any;

  constructor(public af: AngularFireAuth, private router: Router ) 
  {
    this.af.auth.onAuthStateChanged( auth => {if (auth) 
      {
        this.router.navigateByUrl ('/members')
      } 
  });
  
}

  loginfb()
  {
    this.af.auth.signInWithEmailAndPassword
    
  }


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  loggedUser: User;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    //this.loggedUser = this.authService.getLoggedInUser();
  }

}

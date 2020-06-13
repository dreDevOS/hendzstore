import { Component } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { AppUser } from 'src/app/shared/models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }


  logout() {
    this.auth.logout();
    // this.router.navigate(["/"]);
  }



}

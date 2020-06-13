import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service"
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminGaurd implements CanActivate {
  constructor( private router: Router, private auth: AuthService, private userService: UserService) {}

  canActivate() {

  //use angularfireobject instead of firebaseobject observable due to update 
     return this.auth.appUser$
    .pipe(map(AppUser => AppUser.isAdmin));

    // if (this.authService.isLoggedIn() && this.authService.isAdmin) {
    //   return true;
    // }
    // this.router.navigate(["no-access"]);
    // return false;
  }
}
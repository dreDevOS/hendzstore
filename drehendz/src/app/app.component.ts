import { Component } from '@angular/core';
import {fadeAnimation} from "./shared/animations/fadeIntRoute";
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})

export class AppComponent 
{
  title = "app";

constructor( private auth: AuthService, router: Router, private userService: UserService){
  auth.user.subscribe(user => {
    if (user) {
    let returnUrl =  localStorage.getItem('returnUrl');
    if(!user) return;


    localStorage.removeItem('returnUrl');
    router.navigateByUrl(returnUrl);
    }
  });
}


ngOnInit(){
  
  $(document).ready(function() {
    $(".banner").owlCarousel({
      autoHeight: true,
      center: true,
      nav: true,
      items: 1,
      margin: 30,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
  }
}

setGeoLocation(position: any) {
  this.userService.setLocation(
    position["coords"].latitude,
    position["coords"].longitude
  );


}




}

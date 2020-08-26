import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { AppUser } from 'src/app/shared/models/user';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  appUser: AppUser;
 shoppingCartCounter = 0;
  constructor(private auth: AuthService, private cartService: ShoppingCartService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }
  async ngOnInit(): Promise<void> {
    let cart$ = await this.cartService.getcart();
    cart$.valueChanges().subscribe(cart => {
      for(let productID in cart.items){
     this.shoppingCartCounter += cart[productID] ;
      }
    })
    }


  logout() {
    this.auth.logout();
    // this.router.navigate(["/"]);
  }

}

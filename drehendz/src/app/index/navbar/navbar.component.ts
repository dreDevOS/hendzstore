import { Component, OnInit, VERSION } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {ThemeService} from "src/app/shared/services/theme.service";
declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  angularVersion = VERSION;

  constructor(
    public authService: AuthService,
    private themeService: ThemeService,
    private router: Router,
    ) { }

  ngOnInit() {
  }
  logout(){
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  updateTheme(theme: string) {
    this.themeService.updateThemeUrl(theme);
  }

}

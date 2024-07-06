import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';
import { MainMenu } from "./Menu";
import { AuthenticationService } from './service/auth.service';
import { HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "./service/auth-guard.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HttpClientModule],
  providers: [AuthenticationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SchoolAngular';
  menu: MainMenu = new MainMenu();

  constructor (public authService: AuthenticationService,
               private router:Router) {
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['home']);
  }

}

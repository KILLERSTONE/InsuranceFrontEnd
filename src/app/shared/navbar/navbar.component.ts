import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService: AuthService){}

  isAuthenticated(){
    return this.authService.isLoggedIn();
  }

  logout(){
    return this.authService.logout();
  }
}

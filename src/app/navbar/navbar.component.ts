import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService, AngularFireAuth]
})
export class NavbarComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

   constructor(public authService: AuthenticationService) {
     this.authService.user.subscribe(user => {
       if (user == null) {
         this.isLoggedIn = false;
       } else {
         this.isLoggedIn = true;
         this.userName = user.displayName;
       }
     });
   }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  logoutUser() {
    this.authService.logout();
    this.flashMessages.show("Вы вышли из учетной записи", {
      cssClass: 'alert-danger',
      timeout: 4000
    })
    this.router.navigate(['auth']);
    return false;
  }

}

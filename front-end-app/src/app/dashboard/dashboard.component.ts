import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isJunior: boolean = false;
  isElder: boolean = false;
  isMonth: boolean = false;

  constructor(
    private flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  // isClickJunior(){
  //   this.isJunior = true;
  //   this.isElder = false;
  //   this.isMonth = false;
  // }
  //
  // isClickElder(){
  //   this.isJunior = false;
  //   this.isElder = true;
  //   this.isMonth = false;
  // }
  //
  // isClickMonth(){
  //   this.isJunior = false;
  //   this.isElder = false;
  //   this.isMonth = true;
  // }

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

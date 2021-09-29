import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login: String | undefined;
  password: String | undefined;

  constructor(
    private  flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  userLoginClick() {
    const user = {
      login: this.login,
      password: this.password,
    }

    if(user.password == undefined){
      this.flashMessages.show('Введите пароль', {
        cssClass: 'alert-danger',
        timeout: 4000
      })
      return false;
    }

    this.authService.authUser(user).subscribe(data =>{
      if (!data.success) {
        this.flashMessages.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 4000
        })
      } else {
        this.flashMessages.show("Вы успешно авторизовались", {
          cssClass: 'alert-success',
          timeout: 2000
        })
        this.router.navigate(['/dashboard']);
        this.authService.storeUser(data.token, data.user);
      }
    })
    return
  }
}

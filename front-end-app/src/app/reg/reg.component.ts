import {Component, OnInit} from '@angular/core';
import {CheckFormService} from "../services/check-form.service";
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  name: String | undefined;
  login: String | undefined;
  email: String | undefined;
  password: String | undefined;

  constructor(
    private checkForm: CheckFormService,
    private  flashMessages: FlashMessagesService,
    private router: Router,
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
  }

  userRegisterClick() {
    const user = {
      name: this.name,
      login: this.login,
      email: this.email,
      password: this.password,
    }

    if (!this.checkForm.checkName(user.name)) {
      this.flashMessages.show("Имя не введено", {
        cssClass: 'alert-danger',
        timeout: 4000
      })
      return false;
    } else if (!this.checkForm.checkLogin(user.login)) {
      this.flashMessages.show("Логин не введен", {
        cssClass: 'alert-danger',
        timeout: 4000
      })
      return false;
    } else if (!this.checkForm.checkEmail(user.email)) {
      this.flashMessages.show("email не введен", {
        cssClass: 'alert-danger',
        timeout: 4000
      })
      return false;
    } else if (!this.checkForm.checkPassword(user.password)) {
      this.flashMessages.show("Пароль не введен", {
        cssClass: 'alert-danger',
        timeout: 4000
      })
      return false;
    }

    this.authService.registerUser(user).subscribe(({msg, success}) => {
      if (!success) {
        this.flashMessages.show(msg, {
          cssClass: 'alert-danger',
          timeout: 2000
        })
        this.router.navigate(['/reg']);
      } else {
        this.flashMessages.show(msg, {
          cssClass: 'alert-success',
          timeout: 2000
        })
        this.router.navigate(['/auth']);
      }
    });
    return false;
  }
}

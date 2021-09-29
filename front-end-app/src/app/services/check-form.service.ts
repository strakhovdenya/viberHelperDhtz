import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckFormService {

  constructor() { }

  checkName(name:String|undefined){
    return name != undefined;
  }

  checkLogin(login:String|undefined){
    return login != undefined;
  }

  checkEmail(email:String|undefined){
    return email != undefined;
  }

  checkPassword(checkPassword:String|undefined){
    return checkPassword != undefined;
  }
}

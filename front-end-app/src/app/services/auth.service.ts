import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import {JwtHelperService} from '@auth0/angular-jwt';
import {throwError} from "rxjs";
import {Router} from "@angular/router";


export interface user {
  email: string;
  id: string;
  login: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router) {
  }

  registerUser(user: { name: String | undefined; login: String | undefined; email: String | undefined; password: String | undefined; }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(
      'account/reg',
      user,
      {headers: headers}).pipe(map((res: any) => res));
  }

  authUser(user: { login: String | undefined; password: String | undefined; }) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(
      'account/auth',
      user,
      {headers: headers}).pipe(map((res: any) => res));
  }

  storeUser(token: string, user: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isLoggedIn() {
    let token: string | null | undefined = localStorage.getItem('token');
    if (token === null) {
      token = undefined;
    }
    // Check if the token is expired and return true or false

    return !this.jwtHelper.isTokenExpired(token);
  }

  isLoggedUserName(): string {
    let userString: string | null = localStorage.getItem('user');
    let userName: string = '';
    if (userString !== null) {
      let userItem: user = JSON.parse(userString);
      userName = userItem.name;
    }

    return userName;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }


  getUnauthorizedCatcher() {
    return catchError(error => {
        if (error && error.status === 401) {
          this.router.navigate(['auth']);
        }
        return throwError(error);
      }
    );
  }

}

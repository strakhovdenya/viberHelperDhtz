import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
let AuthService = class AuthService {
    constructor(httpClient, jwtHelper, router) {
        this.httpClient = httpClient;
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    registerUser(user) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.httpClient.post('account/reg', user, { headers: headers }).pipe(map((res) => res));
    }
    authUser(user) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.httpClient.post('account/auth', user, { headers: headers }).pipe(map((res) => res));
    }
    storeUser(token, user) {
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
        let token = localStorage.getItem('token');
        if (token === null) {
            token = undefined;
        }
        // Check if the token is expired and return true or false
        return !this.jwtHelper.isTokenExpired(token);
    }
    isLoggedUserName() {
        let userString = localStorage.getItem('user');
        let userName = '';
        if (userString !== null) {
            let userItem = JSON.parse(userString);
            userName = userItem.name;
        }
        return userName;
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getUnauthorizedCatcher() {
        return catchError(error => {
            if (error && error.status === 401) {
                this.router.navigate(['auth']);
            }
            return throwError(error);
        });
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map
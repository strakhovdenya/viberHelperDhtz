import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
let MonthDataService = class MonthDataService {
    constructor(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.elements = [];
    }
    saveMonthData(data, url) {
        const token = this.authService.getToken();
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + token);
        return this.httpClient.post(url, data, {
            headers: headers,
            params: {}
        }).pipe(map((res) => res), this.authService.getUnauthorizedCatcher());
    }
    getMonthData(data, url) {
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8').set('Authorization', 'Bearer ' + token);
        return this.httpClient.get(url + data, { headers: headers, responseType: 'text' }).pipe(map((res) => res), this.authService.getUnauthorizedCatcher());
    }
    getSavedMonths(url) {
        const token = this.authService.getToken();
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8').set('Authorization', 'Bearer ' + token);
        return this.httpClient.get(url, { headers: headers, responseType: 'text' }).pipe(map((res) => res), this.authService.getUnauthorizedCatcher());
    }
};
MonthDataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MonthDataService);
export { MonthDataService };
//# sourceMappingURL=month-data.service.js.map
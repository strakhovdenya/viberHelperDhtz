import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, catchError} from "rxjs/operators";
import {throwError} from "rxjs";
import {ScheduleElement} from "../table/interface/sheduleElement";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class MonthDataService {

  elements: Array<any> = [];

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) {
  }

  saveMonthData(data: Array<ScheduleElement>,url:string) {
    const token = this.authService.getToken();
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + token);
    return this.httpClient.post(
      url,
      data,
      {
        headers: headers,
        params: {}
      }).pipe(
      map((res: any) => res),
      this.authService.getUnauthorizedCatcher()
    );
  }

  getMonthData(data: string, url:string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8').set('Authorization', 'Bearer ' + token);
    return this.httpClient.get(
      url + data,
      {headers: headers, responseType: 'text' as 'json'}
    ).pipe(
      map((res) => res),
      this.authService.getUnauthorizedCatcher()
    );
  }

  getSavedMonths(url:string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8').set('Authorization', 'Bearer ' + token);
    return this.httpClient.get(
      url,
      {headers: headers, responseType: 'text' as 'json'}
    ).pipe(
      map((res) => res),
      this.authService.getUnauthorizedCatcher()
    );
  }

  deleteMonth(url:string){
    const token = this.authService.getToken();
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + token);
    return this.httpClient.delete(
      url,
      {
        headers: headers,
        params: {}
      }).pipe(
      map((res: any) => res),
      this.authService.getUnauthorizedCatcher()
    );
  }
}

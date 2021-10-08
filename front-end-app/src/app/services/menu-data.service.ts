import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ScheduleElement} from "../table/interface/sheduleElement";
import {AuthService} from "./auth.service";
import {IMenu} from "./interfaces/IMenu";



@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) {
  }

  saveMenuData(data: IMenu, url: string = 'api/menus/') {
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
}

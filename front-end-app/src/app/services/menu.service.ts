import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import * as moment from "moment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {IMenu} from "./interfaces/IMenu";

@Injectable({
  providedIn: "root",
})

export class MenuService {
  public data: BehaviorSubject<any>;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) {
  }

  changeDate(menus: any) {
    this.data.next(menus);
  }

  getMenu(url: string) {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + token);
    return this.httpClient.get(
      url,
      {headers: headers},
    ).pipe(
      map((res) => res),
      this.authService.getUnauthorizedCatcher(),
    );
  }

}

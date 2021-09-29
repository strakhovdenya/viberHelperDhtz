import { Injectable } from '@angular/core';
import {Moment} from 'moment';
import * as _moment from 'moment';
const moment = _moment;

@Injectable({
  providedIn: 'root'
})
export class DaysGeneratorService {

  constructor() { }

  getDaysInMonthFromDate(month: Moment): Array<Moment> {
    const daysInMonth = month.daysInMonth();
    const arrDays:Array<Moment> = [];

    if (isNaN(daysInMonth)) {
      return arrDays;
    }

    let dayStart = 1;
    while (daysInMonth >= dayStart) {
      const current = moment().year(month.year()).month(month.month()).date(dayStart);
      arrDays.push(current);
      dayStart++;
    }

    return arrDays;
  }
}

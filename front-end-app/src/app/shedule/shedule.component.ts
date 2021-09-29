import {Component} from '@angular/core';
import {Moment} from 'moment';
import * as _moment from 'moment';
import {DateService} from "../services/date.service";

const moment = _moment;

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})
export class SheduleComponent {

  constructor(public dateService: DateService) {
  }

  title = 'vibermonth';
  date: string;
  dateBase = moment().format();


  onChangedFromPicker(date: Moment): void {
    this.dateBase = date.format();
    this.date = date.format();
    // console.log(date.format());
    // console.log(this.dateBase);
  }
}

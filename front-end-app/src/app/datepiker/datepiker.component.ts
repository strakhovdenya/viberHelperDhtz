import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';

import * as moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {Moment} from 'moment';
import {DateService} from "../services/date.service";

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

/** @title Basic datepicker */
@Component({
  selector: 'datepiker',
  templateUrl: 'datepiker.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class Datepiker {
  // @Output() picker = new EventEmitter<Moment>();

  constructor(public dateService: DateService) {
  }

  // date = new FormControl(moment().date(1));
  date = new FormControl(this.dateService.date.value);

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>): void {
    const ctrlValue = this.date.value;

    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    this.dateService.changeDate(moment(ctrlValue, 'MM/YYYY'));
    datepicker.close();
  }

  chosenYearHandler(normalizedYear: Moment): void {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<any>): void {
    const date = moment(event.value, 'MM/YYYY');
    this.dateService.changeDate(date);
  }
}

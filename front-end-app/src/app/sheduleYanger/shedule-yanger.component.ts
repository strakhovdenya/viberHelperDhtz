import {Component} from '@angular/core';
import {ScheduleElement} from '../table/interface/sheduleElement';

import * as _moment from 'moment';
import {DateService} from "../services/date.service";
import {ActivatedRoute} from "@angular/router";


const moment = _moment;

@Component({
  selector: 'shedule-yanger',
  templateUrl: './shedule-yanger.component.html',
  styleUrls: ['./shedule-yanger.component.css']
})
export class SheduleYangerComponent {

  title = 'vibermonth';
  date: string;
  dateBase = moment().format();
  tableData: Array<ScheduleElement>;
  isTableDataExists: boolean;
  savedStatus: boolean;
  savedStatusAllData: boolean;
  // urlForRequest = 'api/schedule/junior/';
  // urlForSave = 'api/schedule/junior';
  urlForRequest: string;
  urlForSave: string;


  constructor(private dateService: DateService, private route: ActivatedRoute) {

    this.dateService.date.subscribe(value => {
      this.dateBase = value.format();
      this.date = value.format();
    })
  }

  ngOnInit() {
    this.route
      .data
      .subscribe(data => {
        this.urlForRequest = data.urlForRequest;
        this.urlForSave = data.urlForSave;
      });
  }


  onChangedFromTable(dateFromTable: Array<ScheduleElement>): void {
    this.tableData = dateFromTable;
  }

  onChangedFromTableSavedStatus(status: boolean): void {
    this.savedStatus = status;
    this.savedStatusAllData = true;
  }

  onChangedFromTableAllDataSavedStatus(status: boolean): void {
    this.savedStatusAllData = status;
  }

  onSaveData(status: boolean): void {
    this.savedStatus = status;
    this.savedStatusAllData = status;
  }


}

import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ScheduleElement} from '../table/interface/sheduleElement';
import {Moment} from 'moment';
import * as _moment from 'moment';

const moment = _moment;

@Component({
  selector: 'shedule-elder',
  templateUrl: './shedule-elder.component.html',
  styleUrls: ['./shedule-elder.component.css']
})
export class SheduleElderComponent implements OnInit {

  title = 'vibermonth';
  date: string;
  dateBase = moment().format();
  tableData: Array<ScheduleElement>;
  isTableDataExists: boolean;
  savedStatus: boolean;
  urlForRequest = 'api/schedule/elder/';
  urlForSave = 'api/schedule/elder/';


  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.isTableDataExists = false;
    this.cd.detectChanges();
  }


  onChangedFromPicker(date: Moment): void {
    this.dateBase = date.format();
    this.date = date.format();
  }

  onChangedFromTable(dateFromTable: Array<ScheduleElement>): void {
    this.isTableDataExists = true;
    this.tableData = dateFromTable;
  }

  onChangedFromTableSavedStatus(status: boolean): void {
    this.savedStatus = status;
  }

  onSaveData(status: boolean): void {
    this.savedStatus = status;
  }


}

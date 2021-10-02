import {Injectable} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TableData} from '../interface/tableData';
import {MonthDataService} from '../../services/month-data.service';
import {Moment} from 'moment';
import {TableDataForChanges} from "../interface/tableDataForChanges";
import {ScheduleElement} from "../interface/sheduleElement";

@Injectable({
  providedIn: 'root'
})
export class TableDataGeneratorService {

  private tableData: TableData;
  private savedDays;

  constructor(private monthDataService: MonthDataService,) {
  }

  createTable(days: Array<Moment>): TableData {
    const arrDays = [];
    this.initTableData();
    let idIndex = 1;
    days.forEach((day) => {
      const row:ScheduleElement = {
        id: idIndex,
        data: day.format('DD.MM.YYYY'),
        year_month: day.format('YYYY-MM'),
        ice_time:'18:30-19:30',
        ice_place:'Палац спорту',
        ice_gathering_time:'18:30',
        ground_time:'18:30-19:30',
        ground_place:'Манеж',
        ground_gathering_time:'18:30',

      };
      this.fillIndices(arrDays, row, idIndex);
      idIndex++;
    });
    this.tableData.dataSource = new MatTableDataSource(arrDays);
    return this.tableData;
  }

  restoreTable(data: Array<any>): TableData {
    const arrDays = []
    this.initTableData();
    let idIndex = 1;
    data.forEach((day:ScheduleElement) => {
      const row = {
        id: idIndex,
        data: day.data,
        year_month: day.year_month,
        ice_time:day.ice_time,
        ice_place:day.ice_place,
        ice_gathering_time:day.ice_gathering_time,
        ground_time:day.ground_time,
        ground_place:day.ground_place,
        ground_gathering_time:day.ground_gathering_time,
      };
      this.fillIndices(arrDays, row, idIndex);
      idIndex++;
    });
    this.tableData.dataSource = new MatTableDataSource(arrDays);
    return this.tableData;
  }

  fillIndices(arrDays, row, idIndex): void {
    arrDays.push(row);
    this.tableData.ice_time[idIndex] = true;
    this.tableData.ice_place[idIndex] = true;
    this.tableData.ice_gathering_time[idIndex] = true;
    this.tableData.ground_time[idIndex] = true;
    this.tableData.ground_place[idIndex] = true;
    this.tableData.ground_gathering_time[idIndex] = true;
  }

  initTableData(): void {
    this.tableData =
      {
        ice_time:[],
        ice_place:[],
        ice_gathering_time:[],
        ground_time:[],
        ground_place:[],
        ground_gathering_time:[],
        dataSource: new MatTableDataSource([]),
      };
  }

}

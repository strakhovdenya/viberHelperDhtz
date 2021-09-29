import {Injectable} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {TableData} from '../interface/tableData';
import {MonthDataService} from '../../services/month-data.service';
import {Moment} from 'moment';
import {TableDataForChanges} from "../interface/tableDataForChanges";

@Injectable({
  providedIn: 'root'
})
export class TableDataGeneratorService {

  private tabledata: TableData;
  private savedDays;

  constructor(private monthDataService: MonthDataService,) {
  }

  createTable(days: Array<Moment>): TableData {
    const arrDays = [];
    this.initTableData();
    let idIndex = 1;
    days.forEach((day) => {
      const row = {
        id: idIndex,
        data: day.format('DD.MM.YYYY'),
        year_month: day.format('YYYY-MM'),
        time_ice: '19:10',
        ice_place: 'Палац спорту',
        time_ground: '',
        gathering_time: '18:30'
      };
      this.fillIndices(arrDays, row, idIndex);
      idIndex++;
    });
    this.tabledata.dataSource = new MatTableDataSource(arrDays);
    return this.tabledata;
  }

  restoreTable(data: Array<any>): TableData {
    const arrDays = []
    this.initTableData();
    let idIndex = 1;
    data.forEach((day) => {
      const row = {
        id: idIndex,
        data: day.data,
        year_month: day.year_month,
        time_ice: day.time_ice,
        ice_place: day.ice_place,
        time_ground: day.time_ground,
        gathering_time: day.gathering_time
      };
      this.fillIndices(arrDays, row, idIndex);
      idIndex++;
    });
    this.tabledata.dataSource = new MatTableDataSource(arrDays);
    return this.tabledata;
  }

  fillIndices(arrDays, row, idIndex): void {
    arrDays.push(row);
    this.tabledata.numlist[idIndex] = true;
    this.tabledata.groundList[idIndex] = true;
    this.tabledata.gatheringList[idIndex] = true;
    this.tabledata.icePlace[idIndex] = true;
  }

  initTableData(): void {
    this.tabledata =
      {
        numlist: [],
        groundList: [],
        gatheringList: [],
        icePlace: [],
        dataSource: new MatTableDataSource([]),
      };
  }

}

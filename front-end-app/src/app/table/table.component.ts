import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ScheduleElement} from './interface/sheduleElement';
import {DaysGeneratorService} from './services/days-generator.service';
import {TableDataGeneratorService} from './services/table-data-generator.service';
import {MonthDataService} from '../services/month-data.service';
import {IsSavedCheckerService} from '../services/is-saved-checker.service';


// tslint:disable-next-line:no-duplicate-imports
import {Moment} from 'moment';
import * as _moment from 'moment';
import {TableDataForChanges} from "./interface/tableDataForChanges";

const moment = _moment;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DaysGeneratorService, TableDataGeneratorService]
})
export class TableComponent implements OnChanges {
  public datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
  public timemask = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/];
  public myModel = ''
  displayedColumns: string[] = [
    'data',
    'time_ice',
    'ice_place',
    'time_ground',
    'gathering_time',
  ];
  dataSource: MatTableDataSource<ScheduleElement>;
  dataSourceForChek: Array<ScheduleElement>;
  @Input() date: string;
  @Input() url: string;
  @Input() isSave: boolean;
  @Output() table = new EventEmitter<Array<ScheduleElement>>();
  @Output() isSaveStage = new EventEmitter<boolean>();
  @Output() isSaveAllDataStage = new EventEmitter<boolean>();

  numlist: boolean[];
  groundList: boolean[];
  gatheringList: boolean[];
  icePlace: boolean[];
  dataForChanging: TableDataForChanges[]

  constructor(
    private daysGeneratorService: DaysGeneratorService,
    private tableDataGeneratorService: TableDataGeneratorService,
    private monthDataService: MonthDataService,
    public isSavedCheckerService: IsSavedCheckerService
  ) {
  }

  setInputIce(event, index): void {
    this.fillAllListToTrue();
    this.numlist[index] = false;
  }

  setEndOfTextIce(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.numlist[index] = true;
    }
  }

  setInputGround(event, index): void {
    this.fillAllListToTrue();
    this.groundList[index] = false;
  }

  setEndOfTextGround(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.groundList[index] = true;
    }
  }

  setInputGathering(event, index): void {
    this.fillAllListToTrue();
    this.gatheringList[index] = false;
  }

  setEndOfTextGathering(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.gatheringList[index] = true;
    }
  }

  setIcePlace(event, index): void {
    this.fillAllListToTrue();
    this.icePlace[index] = false;
  }

  setEndOfIcePlace(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.icePlace[index] = true;
    }
  }

  fillAllListToTrue(): void {
    this.gatheringList.fill(true);
    this.groundList.fill(true);
    this.numlist.fill(true);
    this.icePlace.fill(true);
  }

  onElementChange(elementId) {

    let base = this.dataSourceForChek.filter(element => element.id === elementId).shift();
    let changed = this.dataSource.data.filter(element => element.id === elementId).shift();
    for (let key in base) {
      if (base[key] !== changed[key]) {
        this.dataForChanging[base.id][key] = false;
      } else {
        this.dataForChanging[base.id][key] = true;
      }
    }

    if (this.isChangesExists() === false) {
      this.isSaveAllDataStage.emit(true);
    } else {
      this.isSaveAllDataStage.emit(false);
    }
  }

  isChangesExists(): boolean {
    for (let key in this.dataSourceForChek) {
      let oneRow = this.dataSourceForChek[key];
      for (let field in oneRow) {
        if (oneRow[field] !== this.dataSource.data[key][field]) {
          return true;
        }
      }
    }
    return false;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.hasOwnProperty('isSave') && changes.isSave.currentValue === true) {
      this.dataSourceForChek = this.dataSource.data.map(a => ({...a}));

      this.setDataForChangingByNumlistArray(this.numlist);
    }

    if (changes.hasOwnProperty('date')) {
      this.updateDateInTable(changes);
    }

  }

  updateDateInTable(changes: SimpleChanges) {
    if (changes.date.currentValue === null || changes.date.currentValue === undefined) {
      this.dataSource = new MatTableDataSource([]);
      this.dataSourceForChek = [];
    } else if (moment(changes.date.currentValue).isValid() === false) {
      this.dataSource = new MatTableDataSource([]);
      this.dataSourceForChek = [];
    } else {

      const dateInner = moment(changes.date.currentValue);
      const daysInMomth = this.getDaysInMonthFromDate(dateInner);
      const [firstDay] = daysInMomth;
      this.monthDataService.getMonthData(firstDay.format('YYYY-MM'), this.url).subscribe(data => {
        let dataResp = {data: []};

        if (typeof data === "string") {
          dataResp = JSON.parse(data);
        }

        if (dataResp.data.length === 0) {
          this.createTable(daysInMomth);
          this.isSaveStage.emit(false);
        } else {
          this.restoreTable(dataResp.data);
          this.isSaveStage.emit(true);
        }
        this.table.emit(this.dataSource.data);
      })
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  getDaysInMonthFromDate(month: Moment): Array<Moment> {
    return this.daysGeneratorService.getDaysInMonthFromDate(month);
  }

  createTable(days: Array<Moment>): void {
    const tableData = this.tableDataGeneratorService.createTable(days);
    this.numlist = tableData.numlist;
    this.groundList = tableData.groundList;
    this.gatheringList = tableData.gatheringList;
    this.icePlace = tableData.icePlace;
    this.dataSource = tableData.dataSource;
    this.dataSourceForChek = tableData.dataSource.data.map(a => ({...a}));
    this.setDataForChangingByNumlistArray(this.numlist);
  }

  restoreTable(days: Array<any>): void {
    const tableData = this.tableDataGeneratorService.restoreTable(days);
    this.numlist = tableData.numlist;
    this.groundList = tableData.groundList;
    this.gatheringList = tableData.gatheringList;
    this.icePlace = tableData.icePlace;
    this.dataSource = tableData.dataSource;
    this.dataSourceForChek = tableData.dataSource.data.map(a => ({...a}));
    this.dataForChanging = [];
    this.setDataForChangingByNumlistArray(this.numlist);
  }

  setDataForChangingByNumlistArray(numlist: Array<boolean>) {
    let arr = [];
    for (let key in numlist) {
      arr[key] = {
        time_ice: true,
        ice_place: true,
        time_ground: true,
        gathering_time: true,
      };
    }
    this.dataForChanging = [...arr];
  }
}

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
  public timeIntervalMask = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/,'-',/[0-2]/, /\d/, ':', /[0-5]/, /\d/];
  public myModel = ''
  displayedColumns: string[] = [
    'data',
    'ice_time',
    'ice_place',
    'ice_gathering_time',
    'ground_time',
    'ground_place',
    'ground_gathering_time',
  ];
  dataSource: MatTableDataSource<ScheduleElement>;
  dataSourceForChek: Array<ScheduleElement>;
  @Input() date: string;
  @Input() url: string;
  @Input() isSave: boolean;
  @Output() table = new EventEmitter<Array<ScheduleElement>>();
  @Output() isSaveStage = new EventEmitter<boolean>();
  @Output() isSaveAllDataStage = new EventEmitter<boolean>();

  ice_time:boolean[];
  ice_place:boolean[];
  ice_gathering_time:boolean[];
  ground_time:boolean[];
  ground_place:boolean[];
  ground_gathering_time:boolean[];
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
    this.ice_time[index] = false;
  }

  setEndOfTextIce(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.ice_time[index] = true;
    }
  }

  setInputGround(event, index): void {
    this.fillAllListToTrue();
    this.ground_time[index] = false;
  }

  setEndOfTextGround(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.ground_time[index] = true;
    }
  }

  setInputIceGatheringTime(event, index): void {
    this.fillAllListToTrue();
    this.ice_gathering_time[index] = false;
  }

  setEndOfTextIceGatheringTime(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.ice_gathering_time[index] = true;
    }
  }

  setInputGroundGatheringTime(event, index): void {
    this.fillAllListToTrue();
    this.ground_gathering_time[index] = false;
  }

  setEndOfTextGroundGatheringTime(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.ground_gathering_time[index] = true;
    }
  }

  setIcePlace(event, index): void {
    this.fillAllListToTrue();
    this.ice_place[index] = false;
  }

  setEndOfIcePlace(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.ice_place[index] = true;
    }
  }

  setGroundPlace(event, index): void {
    this.fillAllListToTrue();
    this.ground_place[index] = false;
  }

  setEndOfGroundPlace(event, index): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.ground_place[index] = true;
    }
  }

  fillAllListToTrue(): void {
    this.ice_time.fill(true);
    this.ice_place.fill(true);
    this.ice_gathering_time.fill(true);
    this.ground_time.fill(true);
    this.ground_place.fill(true);
    this.ground_gathering_time.fill(true);
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

      this.setDataForChangingByNumlistArray(this.ice_time);
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
    this.ice_time = tableData.ice_time;
    this.ice_place = tableData.ice_place;
    this.ice_gathering_time = tableData.ice_gathering_time;
    this.ground_time = tableData.ground_time;
    this.ground_place = tableData.ground_place;
    this.ground_gathering_time = tableData.ground_gathering_time;
    this.dataSource = tableData.dataSource;
    this.dataSourceForChek = tableData.dataSource.data.map(a => ({...a}));
    this.setDataForChangingByNumlistArray(this.ice_time);
  }

  restoreTable(days: Array<any>): void {
    const tableData = this.tableDataGeneratorService.restoreTable(days);
    this.ice_time = tableData.ice_time;
    this.ice_place = tableData.ice_place;
    this.ice_gathering_time = tableData.ice_gathering_time;
    this.ground_time = tableData.ground_time;
    this.ground_place = tableData.ground_place;
    this.ground_gathering_time = tableData.ground_gathering_time;
    this.dataSource = tableData.dataSource;
    this.dataSourceForChek = tableData.dataSource.data.map(a => ({...a}));
    this.dataForChanging = [];
    this.setDataForChangingByNumlistArray(this.ice_time);
  }

  setDataForChangingByNumlistArray(iceTime: Array<boolean>) {
    let arr = [];
    for (let key in iceTime) {
      arr[key] = {
        ice_time:true,
        ice_place:true,
        ice_gathering_time:true,
        ground_time:true,
        ground_place:true,
        ground_gathering_time:true,
      };
    }
    this.dataForChanging = [...arr];
  }
}

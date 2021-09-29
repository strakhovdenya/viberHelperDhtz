import {MatTableDataSource} from '@angular/material/table';
import {ScheduleElement} from './sheduleElement';

export interface TableData {
  numlist: boolean[];
  groundList: boolean[];
  gatheringList: boolean[];
  icePlace: boolean[];
  dataSource: MatTableDataSource<ScheduleElement>;
}

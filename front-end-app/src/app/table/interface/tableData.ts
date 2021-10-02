import {MatTableDataSource} from '@angular/material/table';
import {ScheduleElement} from './sheduleElement';

export interface TableData {
  ice_time:boolean[];
  ice_place:boolean[];
  ice_gathering_time:boolean[];
  ground_time:boolean[];
  ground_place:boolean[];
  ground_gathering_time:boolean[];
  dataSource: MatTableDataSource<ScheduleElement>;
}

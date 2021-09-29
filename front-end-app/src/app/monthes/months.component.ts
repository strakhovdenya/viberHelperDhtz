import { Component, OnInit } from '@angular/core';
import {MonthDataService} from '../services/month-data.service';

@Component({
  selector: 'app-monthes',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  months:Array<string>;

  constructor(private monthDataService:MonthDataService) { }

  ngOnInit(): void {
    this.monthDataService.getSavedMonths('api/schedule/junior/months').subscribe(data => {
      let dataResp = {data: []};

      if (typeof data === "string") {
        dataResp = JSON.parse(data);
      }

      this.months = dataResp.data;
      console.log(this.months);
    });
  }

}

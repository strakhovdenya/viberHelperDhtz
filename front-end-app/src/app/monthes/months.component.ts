import {Component, OnInit} from '@angular/core';
import {MonthDataService} from '../services/month-data.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-monthes',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  months: Array<string>;
  urlForRequest:string;

  constructor(private monthDataService: MonthDataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route
      .data
      .subscribe(data => {
        this.urlForRequest = data.urlForRequest;
        this.monthDataService.getSavedMonths(this.urlForRequest).subscribe(data => {
          let dataResp = {data: []};

          if (typeof data === "string") {
            dataResp = JSON.parse(data);
          }

          this.months = dataResp.data;
          console.log(this.months);
        });
      });

  }

}

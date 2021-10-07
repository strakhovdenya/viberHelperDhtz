import {Component, OnInit} from '@angular/core';
import {MonthDataService} from "../services/month-data.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-list-monthes',
  templateUrl: './list-monthes.component.html',
  styleUrls: ['./list-monthes.component.css']
})
export class ListMonthesComponent implements OnInit {

  months: Array<string>;
  urlForRequest: string;

  constructor(private monthDataService: MonthDataService, private route: ActivatedRoute) {
  }

  private getDataFromService() {
    this.monthDataService.getSavedMonths(this.urlForRequest).subscribe(data => {
      let dataResp = {data: []};

      if (typeof data === "string") {
        dataResp = JSON.parse(data);
      }

      this.months = dataResp.data;
    });
  }

  onChangedMonth(status: boolean): void {
    this.getDataFromService();
  }

  ngOnInit(): void {
    this.route
      .data
      .subscribe(data => {
        this.urlForRequest = data.urlForRequest;
        this.getDataFromService();
      });

  }





}

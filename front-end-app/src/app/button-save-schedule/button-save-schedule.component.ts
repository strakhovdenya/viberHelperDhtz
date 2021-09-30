import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MonthDataService} from '../services/month-data.service';
import {ScheduleElement} from "../table/interface/sheduleElement";
import {FlashMessagesService} from "angular2-flash-messages";


@Component({
  selector: 'button-save-schedule',
  templateUrl: './button-save-schedule.component.html',
  styleUrls: ['./button-save-schedule.component.css']
})
export class ButtonSaveScheduleComponent  {

  @Input() date: Array<ScheduleElement>;
  @Input() url: string;
  @Input() savedStatusAllDataForButton;
  @Input() savedStatusForButton;
  @Output() isSaveStageButton = new EventEmitter<boolean>();

  constructor(
    private monthDataService: MonthDataService,
    private flashMessages: FlashMessagesService,
  ) {
  }


  saveMonthData() {
    this.monthDataService.saveMonthData(this.date, this.url).subscribe(({msg, success}) => {
      if (!success) {
        this.isSaveStageButton.emit(false);
        this.flashMessages.show(msg, {
          cssClass: 'alert-danger',
          timeout: 2000
        })

      } else {
        this.isSaveStageButton.emit(true);
        this.flashMessages.show(msg, {
          cssClass: 'custom-success',
          timeout: 2000
        })
      }
    });
    return false;
  }

}

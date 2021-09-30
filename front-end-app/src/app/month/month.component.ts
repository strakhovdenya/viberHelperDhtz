import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MonthDataService} from "../services/month-data.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ConfirmationDialogService} from "../confirmation-dialog/confirmation-dialog.service";

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  @Input() monthDate: string;
  @Input() urlBase: string;
  @Output() isChanged = new EventEmitter<boolean>();

  constructor(private monthDataService: MonthDataService, private flashMessages: FlashMessagesService, private confirmationDialogService: ConfirmationDialogService) {
  }

  ngOnInit(): void {
  }

  async deleteMonth(event, month): Promise<void> {
    const modalParams = [
      'Подтввердите удаление..',
      `Удалить анные за период ${month}?`,
      'УДАЛИТЬ',
      'ОТМЕНИТЬ',
      'lg'
    ]

    // @ts-ignore
    const confirmed = await this.confirmationDialogService.confirm(...modalParams);
    if (confirmed) {
      this.monthDataService.deleteMonth(this.urlBase + '/' + month).subscribe(({msg, success}) => {
        if (!success) {
          this.flashMessages.show(msg, {
            cssClass: 'alert-danger',
            timeout: 2000
          })

        } else {
          this.flashMessages.show(msg, {
            cssClass: 'custom-success',
            timeout: 2000
          })
          this.isChanged.emit(true);
        }
      });

    }


    return;
  }
}



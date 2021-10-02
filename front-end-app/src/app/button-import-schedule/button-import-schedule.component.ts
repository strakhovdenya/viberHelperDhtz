import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ScheduleElement} from "../table/interface/sheduleElement";
import {ConfirmationDialogService} from "../confirmation-dialog/confirmation-dialog.service";
import {ImportToSiteService} from "../services/import-to-site.service";


@Component({
  selector: 'button-import-schedule',
  templateUrl: './button-import-schedule.component.html',
  styleUrls: ['./button-import-schedule.component.css']
})
export class ButtonImportScheduleComponent {

  @Input() date: Array<ScheduleElement>;
  @Input() url: string;
  @Input() savedStatusAllDataForButton;
  @Input() savedStatusForButton;
  @Output() isSaveStageButton = new EventEmitter<boolean>();

  constructor(
    private confirmationDialogService: ConfirmationDialogService,
    private importToSiteService: ImportToSiteService
  ) {
  }


  async importMonthData() {
    const modalParams = [
      'Импорт на сайт druzhba',
      this.importToSiteService.import(this.date),
      'КОПИРОВАТЬ В БУФЕР',
      'ОТМЕНИТЬ',
      'lg'
    ]

    // @ts-ignore
    const confirmed = await this.confirmationDialogService.confirm(...modalParams);
    if(confirmed){
      this.copyMessage(this.importToSiteService.import(this.date),);
    }
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {EditButtonService} from '../services/edit-button.service';
import {IDtoForEditButton} from '../services/interfaces/IMenu';

@Component({
  selector: 'app-menu-item-edit-button',
  templateUrl: './menu-item-edit-button.component.html',
  styleUrls: ['./menu-item-edit-button.component.css'],
})
export class MenuItemEditButtonComponent implements OnInit, OnDestroy {
  columns: number = null;
  rows: number = null;
  bgColor: string = null;
  text: string = null;
  textSize: string = null;
  actionType: string = null;
  actionBody: string = null;
  isButtonSelected = false;


  constructor(private editButtonService: EditButtonService) {
  }

  ngOnInit(): void {
    this.editButtonService.data.subscribe((value: IDtoForEditButton) => {
      if (value.level !== '') {
        this.isButtonSelected = true;
        this.columns = value.button.Columns;
        this.rows = value.button.Rows;
        this.bgColor = value.button.BgColor;
        this.text = value.button.Text;
        this.textSize = value.button.TextSize;
        this.actionType = value.button.ActionType;
        this.actionBody = value.button.ActionBody;

      }
    });
  }

  ngOnDestroy(): void {
    this.editButtonService.changeDate(this.editButtonService.startValue);
  }

}

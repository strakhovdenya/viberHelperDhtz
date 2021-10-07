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
    this.editButtonService.currentButtonIndex.subscribe((value: number | string) => {
      console.log('butt index',value);
      if (value !== '') {
        const oneButton = this.editButtonService.data.value[value];
        console.log('oneButton',oneButton);
        this.isButtonSelected = true;
        this.columns = oneButton.old.button.Columns;
        this.rows = oneButton.old.button.Rows;
        this.bgColor = oneButton.old.button.BgColor;
        this.text = oneButton.old.button.Text;
        this.textSize = oneButton.old.button.TextSize;
        this.actionType = oneButton.old.button.ActionType;
        this.actionBody = oneButton.new.button.ActionBody === '' ? oneButton.old.button.ActionBody : oneButton.new.button.ActionBody;

      }
    });
  }

  ngOnDestroy(): void {
    // this.editButtonService.changeDate(this.editButtonService.startValue);
  }

  onChangeProperty(data, type): void {
    const currIndexButton = this.editButtonService.currentButtonIndex.value;
    this.editButtonService.data.value[currIndexButton].new.button[type] = data;
  }

}

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

      if (value !== '') {
        const oneButton = this.editButtonService.data.value[value];

        this.isButtonSelected = true;
        this.columns = oneButton.new.button.Columns === 0 ? oneButton.old.button.Columns : oneButton.new.button.Columns;
        this.rows = oneButton.new.button.Rows === 0 ? oneButton.old.button.Rows : oneButton.new.button.Rows;
        this.bgColor = oneButton.new.button.BgColor === '' ? oneButton.old.button.BgColor : oneButton.new.button.BgColor;
        this.text = oneButton.new.button.Text === '' ? oneButton.old.button.Text : oneButton.new.button.Text;
        this.textSize = oneButton.new.button.TextSize === '' ? oneButton.old.button.TextSize : oneButton.new.button.TextSize;
        this.actionType = oneButton.new.button.ActionType === '' ? oneButton.old.button.ActionType : oneButton.new.button.ActionType;
        this.actionBody = oneButton.new.button.ActionBody === '' ? oneButton.old.button.ActionBody : oneButton.new.button.ActionBody;
      }
    });
  }

  ngOnDestroy(): void {
    // this.editButtonService.changeDate(this.editButtonService.startValue);
  }

  onChangeProperty(data, type: string): void {
    const currIndexButton = this.editButtonService.currentButtonIndex.value;
    this.editButtonService.data.value[currIndexButton].new.button[type] = data;
    const propType = type.charAt(0).toLowerCase() + type.slice(1);
    this[propType] = data;
  }

}

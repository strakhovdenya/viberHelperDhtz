import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {EditButtonService} from '../services/edit-button.service';
import {IDtoForEditButton} from '../services/interfaces/IMenu';
import {EditButtonChangedPreviewService} from "../services/edit-button-changed-preview.service";

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

  columnsOld: number = null;
  rowsOld: number = null;
  bgColorOld: string = null;
  textOld: string = null;
  textSizeOld: string = null;
  actionTypeOld: string = null;
  actionBodyOld: string = null;

  isButtonSelected = false;
  buttonIndexCurrent: string | number;

  @Output() buttonIndex = new EventEmitter<number | string>();
  @Output() buttonProperty = new EventEmitter<string>();
  @Output() buttonPropertyValue = new EventEmitter<string>();
  @Output() isCleared = new EventEmitter<boolean>();

  constructor(
    private editButtonService: EditButtonService,
    private editButtonChangedPreviewService: EditButtonChangedPreviewService
  ) {
  }

  ngOnInit(): void {
    this.editButtonService.currentButtonIndex.subscribe((value: number | string) => {

      if (value !== '') {
        const oneButton = this.editButtonService.data.value[value];

        this.buttonIndexCurrent = value;
        this.isButtonSelected = true;
        this.columns = oneButton.new.button.Columns === 0 ? oneButton.old.button.Columns : oneButton.new.button.Columns;
        this.rows = oneButton.new.button.Rows === 0 ? oneButton.old.button.Rows : oneButton.new.button.Rows;
        this.bgColor = oneButton.new.button.BgColor === '' ? oneButton.old.button.BgColor : oneButton.new.button.BgColor;
        this.text = oneButton.new.button.Text === '' ? oneButton.old.button.Text : oneButton.new.button.Text;
        this.textSize = oneButton.new.button.TextSize === '' ? oneButton.old.button.TextSize : oneButton.new.button.TextSize;
        this.actionType = oneButton.new.button.ActionType === '' ? oneButton.old.button.ActionType : oneButton.new.button.ActionType;
        this.actionBody = oneButton.new.button.ActionBody === '' ? oneButton.old.button.ActionBody : oneButton.new.button.ActionBody;

        this.columnsOld = oneButton.old.button.Columns;
        this.rowsOld = oneButton.old.button.Rows;
        this.bgColorOld = oneButton.old.button.BgColor;
        this.textOld = oneButton.old.button.Text;
        this.textSizeOld = oneButton.old.button.TextSize;
        this.actionTypeOld = oneButton.old.button.ActionType;
        this.actionBodyOld = oneButton.old.button.ActionBody;
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
    this.editButtonChangedPreviewService.changeButtonProperty(type);
    this.editButtonChangedPreviewService.changeButtonPropertyValue(data)
    this.editButtonChangedPreviewService.changeButtonIndex(currIndexButton);
  }

  clearMenuChanges(): void {
    console.log('clearMenuChanges');
    const oneButton = this.editButtonService.data.value[this.buttonIndexCurrent];
    this.columns = oneButton.old.button.Columns;
    this.rows = oneButton.old.button.Rows;
    this.bgColor = oneButton.old.button.BgColor;
    this.text = oneButton.old.button.Text;
    this.textSize = oneButton.old.button.TextSize;
    this.actionType = oneButton.old.button.ActionType;
    this.actionBody = oneButton.old.button.ActionBody;

    this.columnsOld = oneButton.old.button.Columns;
    this.rowsOld = oneButton.old.button.Rows;
    this.bgColorOld = oneButton.old.button.BgColor;
    this.textOld = oneButton.old.button.Text;
    this.textSizeOld = oneButton.old.button.TextSize;
    this.actionTypeOld = oneButton.old.button.ActionType;
    this.actionBodyOld = oneButton.old.button.ActionBody;
    this.isCleared.emit(true);
  }

}

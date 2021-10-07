import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PreviewMenuService} from '../services/preview-menu.service';
import {IDtoForEditButton, IMenu} from '../services/interfaces/IMenu';
import {TableTR} from '../services/interfaces/IPreviewTable';
import {EditButtonService} from '../services/edit-button.service';


@Component({
  selector: 'app-menu-item-preview-edit',
  templateUrl: './menu-item-preview-edit.component.html',
  styleUrls: ['./menu-item-preview-edit.component.css'],
})
export class MenuItemPreviewEditComponent implements OnInit, OnChanges {

  @Input() menu: IMenu;
  activeMenu: IMenu = {
    level: '',
    Type: '',
    Buttons: [],
    Revision: 0,
  };

  currentButtonIndex: number | string;


  tablePreview: TableTR[] = [];

  constructor(
    private previewMenuService: PreviewMenuService,
    private editButtonService: EditButtonService) {
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {

    if (changes.hasOwnProperty('menu') && changes.menu.currentValue) {
      this.activeMenu = changes.menu.currentValue;
      this.tablePreview = this.previewMenuService.getDataForPreviewTable(changes.menu.currentValue);
    }
  }

  setButtonForEdit(indexInMenu): void {
    const existData = this.editButtonService.data.value;
    if (existData[indexInMenu] === undefined) {
      existData[indexInMenu] = this.editButtonService.getStartValue();

      existData[indexInMenu].old.level = this.activeMenu.level;
      existData[indexInMenu].old.button = this.menu.Buttons[indexInMenu];
      existData[indexInMenu].old.buttonIndex = indexInMenu;
    }

    this.editButtonService.changeCurrentButtonIndex(indexInMenu);
    this.editButtonService.changeDate(existData);
  }
}

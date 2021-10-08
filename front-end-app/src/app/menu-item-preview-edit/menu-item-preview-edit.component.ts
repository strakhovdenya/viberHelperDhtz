import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MenuPreviewService} from '../services/menu-preview.service';
import {IButton, IMenu} from '../services/interfaces/IMenu';
import {TableTR} from '../services/interfaces/IPreviewTable';
import {MenuEditButtonService} from '../services/menu-edit-button.service';
import {MenuEditButtonChangedPreviewService} from "../services/menu-edit-button-changed-preview.service";
import lodash from "lodash"


@Component({
  selector: 'app-menu-item-preview-edit',
  templateUrl: './menu-item-preview-edit.component.html',
  styleUrls: ['./menu-item-preview-edit.component.css'],
})
export class MenuItemPreviewEditComponent implements OnInit, OnChanges, OnDestroy {

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
    private previewMenuService: MenuPreviewService,
    private editButtonService: MenuEditButtonService,
    private editButtonChangedPreviewService: MenuEditButtonChangedPreviewService,
  ) {
  }

  ngOnInit(): void {
    this.editButtonChangedPreviewService.buttonIndex.subscribe(indexBut => {
      if (indexBut !== '') {
        const buttonProperty = this.editButtonChangedPreviewService.buttonProperty.value;
        const buttonPropertyValue = this.editButtonChangedPreviewService.buttonPropertyValue.value;

        // const updatedMenu =  JSON.parse(JSON.stringify(this.activeMenu))

        this.activeMenu.Buttons.forEach((el: IButton, index) => {
          if (index === Number(indexBut)) {
            el[buttonProperty] = buttonPropertyValue
          }
        });
        this.menu = JSON.parse(JSON.stringify(this.activeMenu));
        this.tablePreview = this.previewMenuService.getDataForPreviewTable(this.activeMenu);
      }
    })
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('menu') && changes.menu.currentValue) {
      this.activeMenu = JSON.parse(JSON.stringify(changes.menu.currentValue));
      this.tablePreview = this.previewMenuService.getDataForPreviewTable(this.activeMenu);
    }
  }

  setButtonForEdit(indexInMenu): void {
    this.currentButtonIndex = indexInMenu;
    const existData = this.editButtonService.data.value;
    if (existData[indexInMenu] === undefined) {

      existData[indexInMenu] = this.editButtonService.getStartValue();
      existData[indexInMenu].level = this.activeMenu.level;

      existData[indexInMenu].old.button = this.menu.Buttons[indexInMenu];
      existData[indexInMenu].old.buttonIndex = indexInMenu;
    }

    this.editButtonService.changeCurrentButtonIndex(indexInMenu);
    this.editButtonService.changeDate(existData);
  }

  ngOnDestroy(): void {
    this.editButtonChangedPreviewService.changeButtonIndex('');
    this.editButtonChangedPreviewService.changeButtonProperty('');
    this.editButtonChangedPreviewService.changeButtonPropertyValue('');
  }
}

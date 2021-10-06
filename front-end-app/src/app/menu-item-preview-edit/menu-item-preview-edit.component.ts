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
    console.log('setButtonForEdit');
    const data: IDtoForEditButton = {
      level: this.activeMenu.level,
      button: this.menu.Buttons[indexInMenu],
      buttonIndex: indexInMenu,
    };

    this.editButtonService.changeDate(data);
  }
}

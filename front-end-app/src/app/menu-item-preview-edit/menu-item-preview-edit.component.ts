import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PreviewMenuService} from '../services/preview-menu.service';
import {IMenu} from '../services/interfaces/IMenu';

interface ITableTD {
  rez: number;
  col: number;
  row: number;
  text: string;
  bgColor: string;
}

type TableTR = ITableTD[];

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

  constructor(private previewMenuService: PreviewMenuService) {
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {

    if (changes.hasOwnProperty('menu') && changes.menu.currentValue) {
      this.activeMenu = changes.menu.currentValue;
      this.tablePreview = this.previewMenuService.getDataForPreviewTable(changes.menu.currentValue);
    }
  }
}

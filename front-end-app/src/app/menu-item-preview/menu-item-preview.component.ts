import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IMenu} from "../services/interfaces/IMenu";
import {PreviewMenuService} from '../services/preview-menu.service';
import {TableTR} from '../services/interfaces/IPreviewTable';

@Component({
  selector: 'app-menu-item-preview',
  templateUrl: './menu-item-preview.component.html',
  styleUrls: ['./menu-item-preview.component.css'],
})
export class MenuItemPreviewComponent implements OnInit, OnChanges {

  @Input() menu: IMenu;

  tablePreview: TableTR[] = [];

  constructor(private previewMenuService: PreviewMenuService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('menu')) {
      this.tablePreview = this.previewMenuService.getDataForPreviewTable(changes.menu.currentValue);
    }
  }
}

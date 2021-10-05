import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IButton, IMenu} from "../services/interfaces/IMenu";

interface ITableTD {
  rez: number;
  col: number;
  row: number;
  text: string;
  bgColor: string
}

type TableTR = ITableTD[];

@Component({
  selector: 'app-menu-item-preview',
  templateUrl: './menu-item-preview.component.html',
  styleUrls: ['./menu-item-preview.component.css']
})
export class MenuItemPreviewComponent implements OnInit, OnChanges {

  @Input() menu: IMenu

  tablePreview: TableTR[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  isRezZero(col: ITableTD): boolean {
    return col.rez === 0;
  }

  ngOnChanges(changes: SimpleChanges): void {


    if (changes.hasOwnProperty('menu')) {

      function getRowLessMax(table: TableTR[]): number {
        let result = 0;
        for (let rowIndex in table) {
          let sumCol = 0;
          for (let column of table[rowIndex]) {
            let col: ITableTD = column;
            sumCol += (col.col + col.rez);
          }
          if (sumCol < 6) {
            return Number(rowIndex);
          } else {
            result = Number(rowIndex + 1);
          }
        }

        return result
      }

      const table = [];
      for (let button of changes.menu.currentValue.Buttons) {
        let currentButton: IButton = button;
        let rowForAdd = getRowLessMax(table);

        for (let i = 0; i < currentButton.Rows; i++) {
          if (!Array.isArray(table[rowForAdd + i])) {
            table[rowForAdd + i] = [];
          }

          if (i === 0) {
            table[rowForAdd + i].push({
              col: currentButton.Columns,
              row: currentButton.Rows,
              rez: 0,
              text: button.Text,
              bgColor: button.BgColor
            });
          } else {
            table[rowForAdd + i].push({rez: currentButton.Columns, col: 0});
          }

        }
      }

      this.tablePreview = table;

    }
  }
}

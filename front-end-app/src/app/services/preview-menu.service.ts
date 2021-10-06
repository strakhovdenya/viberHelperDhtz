import {Injectable} from '@angular/core';
import {IButton, IMenu} from './interfaces/IMenu';

interface ITableTD {
  rez: number;
  col: number;
  row: number;
  text: string;
  bgColor: string;
}

type TableTR = ITableTD[];

@Injectable({
  providedIn: 'root',
})

export class PreviewMenuService {

  constructor() {
  }

  getRowLessMax(table: TableTR[]): number {
    let result = 0;

    for (const rowIndex in table) {
      let sumCol = 0;
      for (const column of table[rowIndex]) {
        const col: ITableTD = column;
        sumCol += (col.col + col.rez);
      }
      if (sumCol < 6) {
        return Number(rowIndex);
      } else {
        result = Number(rowIndex) + 1;
      }
    }

    return result;
  }


  getDataForPreviewTable(menu: IMenu): TableTR[] {
    const table = [];
    for (const button of menu.Buttons) {
      const currentButton: IButton = button;
      const rowForAdd = this.getRowLessMax(table);

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
            bgColor: button.BgColor,
          });
        } else {
          table[rowForAdd + i].push({rez: currentButton.Columns, col: 0});
        }

      }
    }

    return table;
  }


}

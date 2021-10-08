import {Injectable} from '@angular/core';
import {IButton, IMenu} from './interfaces/IMenu';
import {ITableTD, TableTR} from './interfaces/IPreviewTable';

@Injectable({
  providedIn: 'root',
})

export class MenuPreviewService {

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
    for (const buttonIndex in menu.Buttons) {
      const currentButton: IButton = menu.Buttons[buttonIndex];
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
            text: currentButton.Text,
            bgColor: currentButton.BgColor,
            indexInMenu: buttonIndex,
          });
        } else {
          table[rowForAdd + i].push({rez: currentButton.Columns, col: 0});
        }

      }
    }

    return table;
  }


}

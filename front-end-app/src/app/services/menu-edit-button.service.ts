import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IDtoForEditButton} from './interfaces/IMenu';

@Injectable({
  providedIn: 'root',
})

export class MenuEditButtonService {
  public data: BehaviorSubject<Array<IDtoForEditButton>> = new BehaviorSubject<Array<IDtoForEditButton>>([]);
  public currentButtonIndex: BehaviorSubject<number | string> = new BehaviorSubject<number | string>('');

  changeDate(date: IDtoForEditButton[]): void {
    this.data.next(date);
  }

  changeCurrentButtonIndex(date: number | string): void {
    this.currentButtonIndex.next(date);
  }

  getStartValue(): IDtoForEditButton {
    return {
      level: '',
      old: {
        button: {
          Columns: 0,
          Rows: 0,
          BgColor: '',
          Text: '',
          TextSize: '',
          ActionType: '',
          ActionBody: '',
        },
        buttonIndex: 0,
      },
      new: {
        button: {
          Columns: 0,
          Rows: 0,
          BgColor: '',
          Text: '',
          TextSize: '',
          ActionType: '',
          ActionBody: '',
        },
        buttonIndex: 0,
      },
    };
  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IDtoForEditButton} from './interfaces/IMenu';

@Injectable({
  providedIn: 'root',
})

export class EditButtonService {
  public startValue: IDtoForEditButton = {
    old: {
      level: '',
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
      level: '',
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
      old: {
        level: '',
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
        level: '',
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

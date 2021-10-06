import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IDtoForEditButton} from './interfaces/IMenu';

@Injectable({
  providedIn: 'root',
})

export class EditButtonService {
  public startValue: IDtoForEditButton = {
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
  };

  public data: BehaviorSubject<IDtoForEditButton> = new BehaviorSubject<IDtoForEditButton>(this.startValue);

  changeDate(date: IDtoForEditButton): void {
    this.data.next(date);
  }
}

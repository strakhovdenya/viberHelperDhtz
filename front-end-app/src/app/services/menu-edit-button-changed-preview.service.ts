import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IDtoForEditButton} from './interfaces/IMenu';

@Injectable({
  providedIn: 'root',
})

export class MenuEditButtonChangedPreviewService {

  public buttonIndex: BehaviorSubject<number | string> = new BehaviorSubject<number | string>('');
  public buttonProperty: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public buttonPropertyValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  changeButtonIndex(date: number | string): void {
    this.buttonIndex.next(date);
  }

  changeButtonProperty(date: string): void {
    this.buttonProperty.next(date);
  }

  changeButtonPropertyValue(date: string): void {
    this.buttonPropertyValue.next(date);
  }


}

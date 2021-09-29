import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsSavedCheckerService {

  public eventEmit: any;

  constructor() {
    this.eventEmit = new EventEmitter();
  }
}

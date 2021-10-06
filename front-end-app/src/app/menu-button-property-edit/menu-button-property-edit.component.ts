import {
  AfterContentChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {ScheduleElement} from '../table/interface/sheduleElement';

@Component({
  selector: 'app-menu-button-property-edit',
  templateUrl: './menu-button-property-edit.component.html',
  styleUrls: ['./menu-button-property-edit.component.css'],
})
export class MenuButtonPropertyEditComponent implements OnInit, AfterContentChecked {

  @Input() name: string;
  @Input() value: string | number;
  @Output() newValue = new EventEmitter<string | number>();
  oldValue: string | number;

  isInput = false;
  isChanged = false;

  @ViewChild('input', {static: false})
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  constructor(public element: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    this.oldValue = this.value;
  }

  setInput($event, value): void {
    this.isInput = true;
  }

  onElementChange(value): void {
    this.isChanged = value !== this.oldValue;
  }

  setEndOfText(event): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      console.log('setEndOfText');
      this.isInput = false;
      this.newValue.emit(this.value);
    }
  }

  blur(event): void {
    this.isInput = false;
    this.newValue.emit(this.value);
  }

  ngAfterContentChecked(): void {
    this.element.nativeElement.focus();
  }

}

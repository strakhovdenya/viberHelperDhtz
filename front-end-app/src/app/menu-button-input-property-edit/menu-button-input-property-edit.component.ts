import {
  Component,
  ElementRef,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-menu-button-input-property-edit',
  templateUrl: './menu-button-input-property-edit.component.html',
  styleUrls: ['./menu-button-input-property-edit.component.css'],
})
export class MenuButtonInputPropertyEditComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() value: string | number ='';
  @Input() valueOld: string | number ='';
  @Input() isInputDisable: boolean;
  @Output() newValue = new EventEmitter<string | number>();

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('value')) {
      this.isChanged = this.valueOld !==  changes.value.currentValue;
    }
    if (changes.hasOwnProperty('valueOld')) {
      this.isChanged = this.value !==  changes.valueOld.currentValue;
    }

  }

  ngOnInit(): void {
    this.isChanged = this.valueOld !== this.value;
  }

  setInput($event, value): void {
    this.isInput = true;
  }

  onElementChange(value): void {
    this.isChanged = value !== this.valueOld;
  }

  setEndOfText(event): void {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.isInput = false;
      this.newValue.emit(this.value);
    }
  }

  blur(event): void {
    this.isInput = false;
    this.newValue.emit(this.value);
  }



}

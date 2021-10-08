import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output, SimpleChanges,
  ViewChild,
} from '@angular/core';
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-menu-button-select-property-edit',
  templateUrl: './menu-button-select-property-edit.component.html',
  styleUrls: ['./menu-button-select-property-edit.component.css'],
})
export class MenuButtonSelectPropertyEditComponent implements OnInit, OnChanges {

  @Input() name: string;
  @Input() value: string | number = '';
  @Input() valueOld: string | number = '';
  @Input() isInputDisable: boolean;
  @Input() selectList: string[];
  @Output() newValue = new EventEmitter<string | number>();

  selectData: string;

  isInput = false;
  isChanged = false;

  @ViewChild('selector', {static: false}) selector: MatSelect


  constructor(public element: ElementRef<HTMLElement>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('value')) {
      this.isChanged = this.valueOld !== changes.value.currentValue;
    }
    if (changes.hasOwnProperty('valueOld')) {
      this.isChanged = this.value !== changes.valueOld.currentValue;
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
    console.log(this.isChanged, value, this.valueOld);
    this.isInput = false;
    this.newValue.emit(this.value);
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

  changeWindowWithOptions($event){
    if($event === false){
      this.isInput = false;
    }
  }

}

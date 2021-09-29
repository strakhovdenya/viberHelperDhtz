import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-is-saved-all-data',
  templateUrl: './is-saved-all-data.component.html',
  styleUrls: ['./is-saved-all-data.component.css']
})
export class IsSavedAllDataComponent implements OnInit {

  @Input() savedStatusAllDataForButton;

  constructor() { }

  ngOnInit(): void {
  }

}

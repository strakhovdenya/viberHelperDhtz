import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-is-saved-info',
  templateUrl: './is-saved-info.component.html',
  styleUrls: ['./is-saved-info.component.css']
})
export class IsSavedInfoComponent implements OnInit {

  @Input() savedStatusForButton;

  constructor(
  ) {
  }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit(): void {
  }

}

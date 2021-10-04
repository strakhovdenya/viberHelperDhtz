import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  public level:string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( (params:{level:string}):string =>this.level = params.level );
  }

  ngOnInit(): void {
  }

}

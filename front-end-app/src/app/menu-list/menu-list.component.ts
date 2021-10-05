import {Component, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";
import {IMenu} from "../services/interfaces/IMenu";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus: IMenu[] = [];
  activeLevel: string;


  constructor(private menuService: MenuService) {

  }


  ngOnInit(): void {
    this.menuService.getMenu('/api/menus').subscribe((menus: IMenu[]) => {

      this.menuService.data = new BehaviorSubject(menus);
      this.menus = this.menuService.data.value;
      this.activeLevel = this.menus[0].level;
    });

  }

  mouseEnter(level) {
    this.activeLevel = level;
  }

}

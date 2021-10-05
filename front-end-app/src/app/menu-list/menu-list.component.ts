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
  activeMenu: IMenu = {
    level: '',
    Type: '',
    Buttons: [],
    Revision: 0
  };


  constructor(private menuService: MenuService) {

  }


  ngOnInit(): void {
    this.menuService.getMenu('/api/menus').subscribe((menus: IMenu[]) => {

      this.menuService.data = new BehaviorSubject(menus);
      this.menus = this.menuService.data.value;
      this.activeMenu = this.menus[0];
    });

  }

  mouseEnter(menu: IMenu) {
    this.activeMenu = menu;
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MenuService} from '../services/menu.service';
import {IMenu} from '../services/interfaces/IMenu';
import {BehaviorSubject} from 'rxjs';
import {EditButtonService} from "../services/edit-button.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit, OnDestroy {

  public level: string;
  public menu: IMenu;

  constructor(
    private editButtonService: EditButtonService,
    private route: ActivatedRoute,
    private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: { level: string }) => {
      this.level = params.level;
      if (this.menuService.data) {
        this.menu = this.menuService.data.value.find((el: IMenu) => el.level === this.level);
      } else {
        this.menuService.getMenu('/api/menus').subscribe((menus: IMenu[]) => {
          this.menuService.data = new BehaviorSubject(menus);
          this.menu = this.menuService.data.value.find((el: IMenu) => el.level === this.level);
        });
      }
    });
  }

  ngOnDestroy(): void {
    console.log('MenuItemComponent destroy')
    this.editButtonService.changeDate([]);
    this.editButtonService.changeCurrentButtonIndex('');
  }

}

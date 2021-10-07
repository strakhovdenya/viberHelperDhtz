import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MenuService} from '../services/menu.service';
import {IDtoForEditButton, IMenu} from '../services/interfaces/IMenu';
import {BehaviorSubject} from 'rxjs';
import {EditButtonService} from "../services/edit-button.service";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit, OnDestroy {

  public level: string;
  public menuForPreview: IMenu;

  constructor(
    private editButtonService: EditButtonService,
    private route: ActivatedRoute,
    private menuService: MenuService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: { level: string }) => {
      this.level = params.level;
      if (this.menuService.data) {
        this.menuForPreview = this.menuService.data.value.find((el: IMenu) => el.level === this.level);
      } else {
        this.menuService.getMenu('/api/menus').subscribe((menus: IMenu[]) => {
          this.menuService.data = new BehaviorSubject(menus);
          this.menuForPreview = this.menuService.data.value.find((el: IMenu) => el.level === this.level);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.editButtonService.changeDate([]);
    this.editButtonService.changeCurrentButtonIndex('');
  }

  clearPreview() {

    const newDate:IDtoForEditButton[] = JSON.parse(JSON.stringify(this.editButtonService.data.value));
    newDate.forEach(el=>{
      el.new.button.Columns=0;
      el.new.button.Rows=0;
      el.new.button.Text='';
      el.new.button.TextSize='';
      el.new.button.ActionBody='';
      el.new.button.ActionType='';
      el.new.button.BgColor='';
    });
    this.editButtonService.changeDate(newDate);
    this.menuForPreview = JSON.parse(JSON.stringify(this.menuService.data.value.find((el: IMenu) => el.level === this.level)));
  }

}

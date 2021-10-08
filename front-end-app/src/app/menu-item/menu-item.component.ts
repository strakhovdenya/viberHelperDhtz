import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MenuService} from '../services/menu.service';
import {IDtoForEditButton, IMenu} from '../services/interfaces/IMenu';
import {BehaviorSubject} from 'rxjs';
import {MenuEditButtonService} from "../services/menu-edit-button.service";
import {MenuDataService} from "../services/menu-data.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit, OnDestroy {

  public level: string;
  public menuForPreview: IMenu;

  constructor(
    private editButtonService: MenuEditButtonService,
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService,
    private menuDataService: MenuDataService,
    private flashMessages: FlashMessagesService,
  ) {

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

    const newDate: IDtoForEditButton[] = JSON.parse(JSON.stringify(this.editButtonService.data.value));
    newDate.forEach(el => {
      el.new.button.Columns = 0;
      el.new.button.Rows = 0;
      el.new.button.Text = '';
      el.new.button.TextSize = '';
      el.new.button.ActionBody = '';
      el.new.button.ActionType = '';
      el.new.button.BgColor = '';
    });
    this.editButtonService.changeDate(newDate);
    this.menuForPreview = JSON.parse(JSON.stringify(this.menuService.data.value.find((el: IMenu) => el.level === this.level)));
  }

  async savePreview() {
    let currentMenuForSave: IMenu = JSON.parse(JSON.stringify(this.menuService.data.value.find((el: IMenu) => el.level === this.level)));

    this.editButtonService.data.value.forEach((el: IDtoForEditButton, indexButton) => {
      for (let key in el.new.button) {
        if (el.new.button[key] === '' || el.new.button[key] === 0) {
          continue;
        }
        currentMenuForSave.Buttons[indexButton][key] = JSON.parse(JSON.stringify(el.new.button[key]));
      }
    });

    this.menuDataService.saveMenuData(currentMenuForSave).subscribe(({msg, success}) => {
      if (!success) {
        this.flashMessages.show(msg, {
          cssClass: 'alert-danger',
          timeout: 2000
        });
      } else {
        this.flashMessages.show(msg, {
          cssClass: 'custom-success',
          timeout: 2000
        })

        const newDate: IDtoForEditButton[] = JSON.parse(JSON.stringify(this.editButtonService.data.value));
        newDate.forEach(el => {
          el.old.button.Columns = el.new.button.Columns === 0 ? el.old.button.Columns : el.new.button.Columns;
          el.old.button.Rows = el.new.button.Rows === 0 ? el.old.button.Rows : el.new.button.Rows;
          el.old.button.Text = el.new.button.Text == '' ? el.old.button.Text : el.new.button.Text;
          el.old.button.TextSize = el.new.button.TextSize == '' ? el.old.button.TextSize : el.new.button.TextSize;
          el.old.button.ActionBody = el.new.button.ActionBody == '' ? el.old.button.ActionBody : el.new.button.ActionBody;
          el.old.button.ActionType = el.new.button.ActionType == '' ? el.old.button.ActionType : el.new.button.ActionType;
          el.old.button.BgColor = el.new.button.BgColor == '' ? el.old.button.BgColor : el.new.button.BgColor;
        });

        this.editButtonService.changeDate(newDate);
        this.menuService.changeDate(null);
        this.router.navigate(['dashboard/menu_settings'])
      }
    });
    return false;
  }

}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
// import { TextMaskModule } from 'angular2-text-mask';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RegComponent} from './reg/reg.component';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';


import {HomeComponent} from './home/home.component';
import {ScheduleComponent} from './sheduleYanger/schedule.component';


import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';

import {FormsModule} from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {CheckFormService} from './services/check-form.service';
import {MonthDataService} from './services/month-data.service';
import {IsSavedCheckerService} from './services/is-saved-checker.service';
import {AuthService} from './services/auth.service';
import {IsLoggedIn} from './services/isLogged.guard';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';

import {MaterialModule} from './material/material.module';
import {TableModule} from './table/table.module';
import {DatepikerModule} from './datepiker/datepikerModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonSaveScheduleComponent} from './button-save-schedule/button-save-schedule.component';
import {DateService} from "./services/date.service";
import { ListMonthesComponent } from './list-monthes/list-monthes.component';
import { MonthComponent } from './month/month.component';
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmationDialogService} from "./confirmation-dialog/confirmation-dialog.service";
import {ButtonImportScheduleComponent} from "./button-import-schedule/button-import-schedule.component";
import {ImportToSiteService} from "./services/import-to-site.service";
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import {MenuService} from "./services/menu.service";
import { MenuItemPreviewComponent } from './menu-item-preview/menu-item-preview.component';
import { MenuItemPreviewEditComponent } from './menu-item-preview-edit/menu-item-preview-edit.component';
import {PreviewMenuService} from './services/preview-menu.service';
import { MenuItemEditButtonComponent } from './menu-item-edit-button/menu-item-edit-button.component';
import {EditButtonService} from './services/edit-button.service';


const DashboardRoute: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'juniors',
    component: ScheduleComponent,
    data: {urlForRequest: 'api/schedule/junior/', urlForSave: 'api/schedule/junior/',}
  },
  {
    path: 'middles',
    component: ScheduleComponent,
    data: {urlForRequest: 'api/schedule/middle/', urlForSave: 'api/schedule/middle/',}
  },
  {
    path: 'elders',
    component: ScheduleComponent,
    data: {urlForRequest: 'api/schedule/elder/', urlForSave: 'api/schedule/elder/',}
  },
  {path: 'month_juniors', component: ListMonthesComponent, data: {urlForRequest: 'api/schedule/junior/months'}},
  {path: 'month_middles', component: ListMonthesComponent, data: {urlForRequest: 'api/schedule/middle/months'}},
  {path: 'month_elders', component: ListMonthesComponent,data: {urlForRequest: 'api/schedule/elder/months'}},
  {path: 'menu_settings', component: MenuListComponent, canActivate: [IsLoggedIn]},
  {path: 'menu_settings/menu_item/:level', component: MenuItemComponent, canActivate: [IsLoggedIn]},
];

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'reg', component: RegComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [IsLoggedIn], children: DashboardRoute},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent,
    ScheduleComponent,
    ButtonSaveScheduleComponent,
    ButtonImportScheduleComponent,
    ListMonthesComponent,
    MonthComponent,
    ConfirmationDialogComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuItemPreviewComponent,
    MenuItemPreviewEditComponent,
    MenuItemEditButtonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    MaterialModule,
    DatepikerModule,
    TableModule,
    BrowserAnimationsModule,
    NgbModule,
    // TextMaskModule
  ],
  providers: [
    DateService,
    MenuService,
    IsSavedCheckerService,
    MonthDataService,
    CheckFormService,
    AuthService,
    IsLoggedIn,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    ConfirmationDialogService,
    ImportToSiteService,
    PreviewMenuService,
    EditButtonService
  ],
  exports: [],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ],
})
export class AppModule {
}

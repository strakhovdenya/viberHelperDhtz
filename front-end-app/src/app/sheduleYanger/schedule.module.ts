import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepikerModule } from '../datepiker/datepikerModule';
import { TableModule } from '../table/table.module';
import { TableComponent } from '../table/table.component';
import { Datepiker } from '../datepiker/datepiker.component';
import { ScheduleComponent } from './schedule.component';
import { ButtonSaveScheduleComponent } from '../button-save-schedule/button-save-schedule.component';


@NgModule({
  declarations: [
    ScheduleComponent,
    TableComponent,
    Datepiker,
    ButtonSaveScheduleComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DatepikerModule,
    TableModule
  ],
  providers: [],
  bootstrap: [ScheduleComponent]
})
export class ScheduleModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepikerModule } from '../datepiker/datepikerModule';
import { TableModule } from '../table/table.module';
import { TableComponent } from '../table/table.component';
import { Datepiker } from '../datepiker/datepiker.component';
import { SheduleYangerComponent } from './shedule-yanger.component';
import { ButtonSaveScheduleComponent } from '../button-save-schedule/button-save-schedule.component';
import { IsSavedInfoComponent } from '../is-saved-info/is-saved-info.component';
import { IsSavedAllDataComponent } from '../is-saved-all-data/is-saved-all-data.component';

@NgModule({
  declarations: [
    SheduleYangerComponent,
    TableComponent,
    Datepiker,
    ButtonSaveScheduleComponent,
    IsSavedInfoComponent,
    IsSavedAllDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DatepikerModule,
    TableModule
  ],
  providers: [],
  bootstrap: [SheduleYangerComponent]
})
export class SheduleYangerModule { }

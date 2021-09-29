import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepikerModule } from '../datepiker/datepikerModule';
import { TableModule } from '../table/table.module';
import { TableComponent } from '../table/table.component';
import { Datepiker } from '../datepiker/datepiker.component';
import { SheduleElderComponent } from './shedule-elder.component';
import { ButtonSaveScheduleComponent } from '../button-save-schedule/button-save-schedule.component';
import { IsSavedInfoComponent } from '../is-saved-info/is-saved-info.component';

@NgModule({
  declarations: [
    SheduleElderComponent,
    TableComponent,
    Datepiker,
    ButtonSaveScheduleComponent,
    IsSavedInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DatepikerModule,
    TableModule
  ],
  providers: [],
  bootstrap: [SheduleElderComponent]
})
export class SheduleElderModule{ }

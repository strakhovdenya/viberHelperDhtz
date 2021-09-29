import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SheduleComponent } from './shedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepikerModule } from '../datepiker/datepikerModule';
import { TableModule } from '../table/table.module';


@NgModule({
  declarations: [
    SheduleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DatepikerModule,
    TableModule
  ],
  providers: [],
  bootstrap: [SheduleComponent]
})
export class SheduleModule { }

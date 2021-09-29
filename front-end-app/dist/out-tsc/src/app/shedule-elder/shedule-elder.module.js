import { __decorate } from "tslib";
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
let SheduleElderModule = class SheduleElderModule {
};
SheduleElderModule = __decorate([
    NgModule({
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
], SheduleElderModule);
export { SheduleElderModule };
//# sourceMappingURL=shedule-elder.module.js.map
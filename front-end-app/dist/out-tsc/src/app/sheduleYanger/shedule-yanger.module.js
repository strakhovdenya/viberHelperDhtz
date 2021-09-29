import { __decorate } from "tslib";
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
let SheduleYangerModule = class SheduleYangerModule {
};
SheduleYangerModule = __decorate([
    NgModule({
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
], SheduleYangerModule);
export { SheduleYangerModule };
//# sourceMappingURL=shedule-yanger.module.js.map
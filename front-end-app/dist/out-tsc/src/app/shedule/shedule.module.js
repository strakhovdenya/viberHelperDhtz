import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SheduleComponent } from './shedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepikerModule } from '../datepiker/datepikerModule';
import { TableModule } from '../table/table.module';
let SheduleModule = class SheduleModule {
};
SheduleModule = __decorate([
    NgModule({
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
], SheduleModule);
export { SheduleModule };
//# sourceMappingURL=shedule.module.js.map
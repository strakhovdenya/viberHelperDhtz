import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
export const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Basic datepicker */
let Datepiker = class Datepiker {
    // @Output() picker = new EventEmitter<Moment>();
    constructor(dateService) {
        this.dateService = dateService;
        // date = new FormControl(moment().date(1));
        this.date = new FormControl(this.dateService.date.value);
    }
    chosenMonthHandler(normalizedMonth, datepicker) {
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        this.date.setValue(ctrlValue);
        this.dateService.changeDate(moment(ctrlValue, 'MM/YYYY'));
        datepicker.close();
    }
    chosenYearHandler(normalizedYear) {
        const ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    }
    addEvent(type, event) {
        const date = moment(event.value, 'MM/YYYY');
        this.dateService.changeDate(date);
    }
};
Datepiker = __decorate([
    Component({
        selector: 'datepiker',
        templateUrl: 'datepiker.component.html',
        providers: [
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
            },
            { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
        ]
    })
], Datepiker);
export { Datepiker };
//# sourceMappingURL=datepiker.component.js.map
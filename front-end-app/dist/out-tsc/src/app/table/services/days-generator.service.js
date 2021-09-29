import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as _moment from 'moment';
const moment = _moment;
let DaysGeneratorService = class DaysGeneratorService {
    constructor() { }
    getDaysInMonthFromDate(month) {
        const daysInMonth = month.daysInMonth();
        const arrDays = [];
        if (isNaN(daysInMonth)) {
            return arrDays;
        }
        let dayStart = 1;
        while (daysInMonth >= dayStart) {
            const current = moment().year(month.year()).month(month.month()).date(dayStart);
            arrDays.push(current);
            dayStart++;
        }
        return arrDays;
    }
};
DaysGeneratorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DaysGeneratorService);
export { DaysGeneratorService };
//# sourceMappingURL=days-generator.service.js.map
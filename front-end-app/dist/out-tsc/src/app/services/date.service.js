import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as moment from "moment";
let DateService = class DateService {
    constructor() {
        this.date = new BehaviorSubject(moment());
    }
    changeDate(date) {
        // const value = this.date.value;
        this.date.next(date);
    }
};
DateService = __decorate([
    Injectable({
        providedIn: "root"
    })
], DateService);
export { DateService };
//# sourceMappingURL=date.service.js.map
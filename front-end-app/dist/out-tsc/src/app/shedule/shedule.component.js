import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as _moment from 'moment';
const moment = _moment;
let SheduleComponent = class SheduleComponent {
    constructor(dateService) {
        this.dateService = dateService;
        this.title = 'vibermonth';
        this.dateBase = moment().format();
    }
    onChangedFromPicker(date) {
        this.dateBase = date.format();
        this.date = date.format();
        // console.log(date.format());
        // console.log(this.dateBase);
    }
};
SheduleComponent = __decorate([
    Component({
        selector: 'app-shedule',
        templateUrl: './shedule.component.html',
        styleUrls: ['./shedule.component.css']
    })
], SheduleComponent);
export { SheduleComponent };
//# sourceMappingURL=shedule.component.js.map
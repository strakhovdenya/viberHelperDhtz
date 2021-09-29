import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as _moment from 'moment';
const moment = _moment;
let SheduleElderComponent = class SheduleElderComponent {
    constructor(cd) {
        this.cd = cd;
        this.title = 'vibermonth';
        this.dateBase = moment().format();
        this.urlForRequest = 'api/schedule/elder/';
        this.urlForSave = 'api/schedule/elder/';
    }
    ngOnInit() {
        this.isTableDataExists = false;
        this.cd.detectChanges();
    }
    onChangedFromPicker(date) {
        this.dateBase = date.format();
        this.date = date.format();
    }
    onChangedFromTable(dateFromTable) {
        this.isTableDataExists = true;
        this.tableData = dateFromTable;
    }
    onChangedFromTableSavedStatus(status) {
        this.savedStatus = status;
    }
    onSaveData(status) {
        this.savedStatus = status;
    }
};
SheduleElderComponent = __decorate([
    Component({
        selector: 'shedule-elder',
        templateUrl: './shedule-elder.component.html',
        styleUrls: ['./shedule-elder.component.css']
    })
], SheduleElderComponent);
export { SheduleElderComponent };
//# sourceMappingURL=shedule-elder.component.js.map
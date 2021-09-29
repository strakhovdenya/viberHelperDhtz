import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as _moment from 'moment';
const moment = _moment;
let SheduleYangerComponent = class SheduleYangerComponent {
    constructor(
    // private cd: ChangeDetectorRef,
    dateService) {
        this.dateService = dateService;
        this.title = 'vibermonth';
        this.dateBase = moment().format();
        this.urlForRequest = 'api/schedule/junior/';
        this.urlForSave = 'api/schedule/junior';
        this.dateService.date.subscribe(value => {
            this.dateBase = value.format();
            this.date = value.format();
        });
    }
    onChangedFromTable(dateFromTable) {
        this.tableData = dateFromTable;
    }
    onChangedFromTableSavedStatus(status) {
        this.savedStatus = status;
        this.savedStatusAllData = true;
    }
    onChangedFromTableAllDataSavedStatus(status) {
        this.savedStatusAllData = status;
    }
    onSaveData(status) {
        this.savedStatus = status;
        this.savedStatusAllData = status;
    }
};
SheduleYangerComponent = __decorate([
    Component({
        selector: 'shedule-yanger',
        templateUrl: './shedule-yanger.component.html',
        styleUrls: ['./shedule-yanger.component.css']
    })
], SheduleYangerComponent);
export { SheduleYangerComponent };
//# sourceMappingURL=shedule-yanger.component.js.map
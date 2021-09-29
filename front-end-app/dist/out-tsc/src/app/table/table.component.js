import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DaysGeneratorService } from './services/days-generator.service';
import { TableDataGeneratorService } from './services/table-data-generator.service';
import * as _moment from 'moment';
const moment = _moment;
let TableComponent = class TableComponent {
    constructor(daysGeneratorService, tableDataGeneratorService, monthDataService, isSavedCheckerService) {
        this.daysGeneratorService = daysGeneratorService;
        this.tableDataGeneratorService = tableDataGeneratorService;
        this.monthDataService = monthDataService;
        this.isSavedCheckerService = isSavedCheckerService;
        this.datemask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.timemask = [/[0-2]/, /\d/, ':', /[0-5]/, /\d/];
        this.myModel = '';
        this.displayedColumns = [
            'data',
            'time_ice',
            'ice_place',
            'time_ground',
            'gathering_time',
        ];
        this.table = new EventEmitter();
        this.isSaveStage = new EventEmitter();
        this.isSaveAllDataStage = new EventEmitter();
    }
    setInputIce(event, index) {
        this.fillAllListToTrue();
        this.numlist[index] = false;
    }
    setEndOfTextIce(event, index) {
        if (event.keyCode === 13 || event.keyCode === 27) {
            this.numlist[index] = true;
        }
    }
    setInputGround(event, index) {
        this.fillAllListToTrue();
        this.groundList[index] = false;
    }
    setEndOfTextGround(event, index) {
        if (event.keyCode === 13 || event.keyCode === 27) {
            this.groundList[index] = true;
        }
    }
    setInputGathering(event, index) {
        this.fillAllListToTrue();
        this.gatheringList[index] = false;
    }
    setEndOfTextGathering(event, index) {
        if (event.keyCode === 13 || event.keyCode === 27) {
            this.gatheringList[index] = true;
        }
    }
    setIcePlace(event, index) {
        this.fillAllListToTrue();
        this.icePlace[index] = false;
    }
    setEndOfIcePlace(event, index) {
        if (event.keyCode === 13 || event.keyCode === 27) {
            this.icePlace[index] = true;
        }
    }
    fillAllListToTrue() {
        this.gatheringList.fill(true);
        this.groundList.fill(true);
        this.numlist.fill(true);
        this.icePlace.fill(true);
    }
    onElementChange(elementId) {
        let base = this.dataSourceForChek.filter(element => element.id === elementId).shift();
        let changed = this.dataSource.data.filter(element => element.id === elementId).shift();
        for (let key in base) {
            if (base[key] !== changed[key]) {
                this.dataForChanging[base.id][key] = false;
            }
            else {
                this.dataForChanging[base.id][key] = true;
            }
        }
        if (this.isChangesExists() === false) {
            this.isSaveAllDataStage.emit(true);
        }
        else {
            this.isSaveAllDataStage.emit(false);
        }
    }
    isChangesExists() {
        for (let key in this.dataSourceForChek) {
            let oneRow = this.dataSourceForChek[key];
            for (let field in oneRow) {
                if (oneRow[field] !== this.dataSource.data[key][field]) {
                    return true;
                }
            }
        }
        return false;
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('isSave') && changes.isSave.currentValue === true) {
            this.dataSourceForChek = this.dataSource.data.map(a => (Object.assign({}, a)));
            this.setDataForChangingByNumlistArray(this.numlist);
        }
        if (changes.hasOwnProperty('date')) {
            this.updateDateInTable(changes);
        }
    }
    updateDateInTable(changes) {
        if (changes.date.currentValue === null || changes.date.currentValue === undefined) {
            this.dataSource = new MatTableDataSource([]);
            this.dataSourceForChek = [];
        }
        else if (moment(changes.date.currentValue).isValid() === false) {
            this.dataSource = new MatTableDataSource([]);
            this.dataSourceForChek = [];
        }
        else {
            const dateInner = moment(changes.date.currentValue);
            const daysInMomth = this.getDaysInMonthFromDate(dateInner);
            const [firstDay] = daysInMomth;
            this.monthDataService.getMonthData(firstDay.format('YYYY-MM'), this.url).subscribe(data => {
                let dataResp = { data: [] };
                if (typeof data === "string") {
                    dataResp = JSON.parse(data);
                }
                if (dataResp.data.length === 0) {
                    this.createTable(daysInMomth);
                    this.isSaveStage.emit(false);
                }
                else {
                    this.restoreTable(dataResp.data);
                    this.isSaveStage.emit(true);
                }
                this.table.emit(this.dataSource.data);
            });
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getDaysInMonthFromDate(month) {
        return this.daysGeneratorService.getDaysInMonthFromDate(month);
    }
    createTable(days) {
        const tableData = this.tableDataGeneratorService.createTable(days);
        this.numlist = tableData.numlist;
        this.groundList = tableData.groundList;
        this.gatheringList = tableData.gatheringList;
        this.icePlace = tableData.icePlace;
        this.dataSource = tableData.dataSource;
        this.dataSourceForChek = tableData.dataSource.data.map(a => (Object.assign({}, a)));
        this.setDataForChangingByNumlistArray(this.numlist);
    }
    restoreTable(days) {
        const tableData = this.tableDataGeneratorService.restoreTable(days);
        this.numlist = tableData.numlist;
        this.groundList = tableData.groundList;
        this.gatheringList = tableData.gatheringList;
        this.icePlace = tableData.icePlace;
        this.dataSource = tableData.dataSource;
        this.dataSourceForChek = tableData.dataSource.data.map(a => (Object.assign({}, a)));
        this.dataForChanging = [];
        this.setDataForChangingByNumlistArray(this.numlist);
    }
    setDataForChangingByNumlistArray(numlist) {
        let arr = [];
        for (let key in numlist) {
            arr[key] = {
                time_ice: true,
                ice_place: true,
                time_ground: true,
                gathering_time: true,
            };
        }
        this.dataForChanging = [...arr];
    }
};
__decorate([
    Input()
], TableComponent.prototype, "date", void 0);
__decorate([
    Input()
], TableComponent.prototype, "url", void 0);
__decorate([
    Input()
], TableComponent.prototype, "isSave", void 0);
__decorate([
    Output()
], TableComponent.prototype, "table", void 0);
__decorate([
    Output()
], TableComponent.prototype, "isSaveStage", void 0);
__decorate([
    Output()
], TableComponent.prototype, "isSaveAllDataStage", void 0);
TableComponent = __decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.css'],
        providers: [DaysGeneratorService, TableDataGeneratorService]
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map
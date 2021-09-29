import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
let TableDataGeneratorService = class TableDataGeneratorService {
    constructor(monthDataService) {
        this.monthDataService = monthDataService;
    }
    createTable(days) {
        const arrDays = [];
        this.initTableData();
        let idIndex = 1;
        days.forEach((day) => {
            const row = {
                id: idIndex,
                data: day.format('DD.MM.YYYY'),
                year_month: day.format('YYYY-MM'),
                time_ice: '19:10',
                ice_place: 'Палац спорту',
                time_ground: '',
                gathering_time: '18:30'
            };
            this.fillIndices(arrDays, row, idIndex);
            idIndex++;
        });
        this.tabledata.dataSource = new MatTableDataSource(arrDays);
        return this.tabledata;
    }
    restoreTable(data) {
        const arrDays = [];
        this.initTableData();
        let idIndex = 1;
        data.forEach((day) => {
            const row = {
                id: idIndex,
                data: day.data,
                year_month: day.year_month,
                time_ice: day.time_ice,
                ice_place: day.ice_place,
                time_ground: day.time_ground,
                gathering_time: day.gathering_time
            };
            this.fillIndices(arrDays, row, idIndex);
            idIndex++;
        });
        this.tabledata.dataSource = new MatTableDataSource(arrDays);
        return this.tabledata;
    }
    fillIndices(arrDays, row, idIndex) {
        arrDays.push(row);
        this.tabledata.numlist[idIndex] = true;
        this.tabledata.groundList[idIndex] = true;
        this.tabledata.gatheringList[idIndex] = true;
        this.tabledata.icePlace[idIndex] = true;
    }
    initTableData() {
        this.tabledata =
            {
                numlist: [],
                groundList: [],
                gatheringList: [],
                icePlace: [],
                dataSource: new MatTableDataSource([]),
            };
    }
};
TableDataGeneratorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TableDataGeneratorService);
export { TableDataGeneratorService };
//# sourceMappingURL=table-data-generator.service.js.map
import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MonthsComponent = class MonthsComponent {
    constructor(monthDataService) {
        this.monthDataService = monthDataService;
    }
    ngOnInit() {
        this.monthDataService.getSavedMonths('api/schedule/junior/months').subscribe(data => {
            let dataResp = { data: [] };
            if (typeof data === "string") {
                dataResp = JSON.parse(data);
            }
            this.months = dataResp.data;
            console.log(this.months);
        });
    }
};
MonthsComponent = __decorate([
    Component({
        selector: 'app-monthes',
        templateUrl: './months.component.html',
        styleUrls: ['./months.component.css']
    })
], MonthsComponent);
export { MonthsComponent };
//# sourceMappingURL=months.component.js.map
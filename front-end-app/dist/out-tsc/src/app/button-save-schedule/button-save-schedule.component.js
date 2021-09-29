import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let ButtonSaveScheduleComponent = class ButtonSaveScheduleComponent {
    constructor(monthDataService, flashMessages) {
        this.monthDataService = monthDataService;
        this.flashMessages = flashMessages;
        this.isSaveStageButton = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges() {
        // console.log('ButtonSaveScheduleComponent:ngOnChanges');
        // console.log(this.date);
    }
    saveMonthData() {
        this.monthDataService.saveMonthData(this.date, this.url).subscribe(({ msg, success }) => {
            if (!success) {
                this.isSaveStageButton.emit(false);
                this.flashMessages.show(msg, {
                    cssClass: 'alert-danger',
                    timeout: 2000
                });
            }
            else {
                this.isSaveStageButton.emit(true);
                this.flashMessages.show(msg, {
                    cssClass: 'custom-success',
                    timeout: 2000
                });
            }
        });
        return false;
    }
};
__decorate([
    Input()
], ButtonSaveScheduleComponent.prototype, "date", void 0);
__decorate([
    Input()
], ButtonSaveScheduleComponent.prototype, "url", void 0);
__decorate([
    Output()
], ButtonSaveScheduleComponent.prototype, "isSaveStageButton", void 0);
ButtonSaveScheduleComponent = __decorate([
    Component({
        selector: 'button-save-schedule',
        templateUrl: './button-save-schedule.component.html',
        styleUrls: ['./button-save-schedule.component.css']
    })
], ButtonSaveScheduleComponent);
export { ButtonSaveScheduleComponent };
//# sourceMappingURL=button-save-schedule.component.js.map
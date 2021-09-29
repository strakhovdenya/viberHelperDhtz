import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(flashMessages, router, authService) {
        this.flashMessages = flashMessages;
        this.router = router;
        this.authService = authService;
        this.isJunior = false;
        this.isElder = false;
        this.isMonth = false;
    }
    ngOnInit() {
    }
    // isClickJunior(){
    //   this.isJunior = true;
    //   this.isElder = false;
    //   this.isMonth = false;
    // }
    //
    // isClickElder(){
    //   this.isJunior = false;
    //   this.isElder = true;
    //   this.isMonth = false;
    // }
    //
    // isClickMonth(){
    //   this.isJunior = false;
    //   this.isElder = false;
    //   this.isMonth = true;
    // }
    logoutUser() {
        this.authService.logout();
        this.flashMessages.show("Вы вышли из учетной записи", {
            cssClass: 'alert-danger',
            timeout: 4000
        });
        this.router.navigate(['auth']);
        return false;
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map
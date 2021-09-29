import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(authService, flashMessages, router) {
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.router = router;
    }
    ngOnInit() {
    }
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
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map
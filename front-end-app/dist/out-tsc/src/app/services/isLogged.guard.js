import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let IsLoggedIn = class IsLoggedIn {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // @ts-ignore
    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['auth']);
            return false;
        }
    }
};
IsLoggedIn = __decorate([
    Injectable()
], IsLoggedIn);
export { IsLoggedIn };
//# sourceMappingURL=isLogged.guard.js.map
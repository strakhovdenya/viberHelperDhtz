import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CheckFormService = class CheckFormService {
    constructor() { }
    checkName(name) {
        return name != undefined;
    }
    checkLogin(login) {
        return login != undefined;
    }
    checkEmail(email) {
        return email != undefined;
    }
    checkPassword(checkPassword) {
        return checkPassword != undefined;
    }
};
CheckFormService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CheckFormService);
export { CheckFormService };
//# sourceMappingURL=check-form.service.js.map
import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AuthComponent = class AuthComponent {
    constructor(flashMessages, router, authService) {
        this.flashMessages = flashMessages;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    userLoginClick() {
        const user = {
            login: this.login,
            password: this.password,
        };
        if (user.password == undefined) {
            this.flashMessages.show('Введите пароль', {
                cssClass: 'alert-danger',
                timeout: 4000
            });
            return false;
        }
        this.authService.authUser(user).subscribe(data => {
            if (!data.success) {
                this.flashMessages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 4000
                });
            }
            else {
                this.flashMessages.show("Вы успешно авторизовались", {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
                this.router.navigate(['/dashboard']);
                this.authService.storeUser(data.token, data.user);
            }
        });
        return;
    }
};
AuthComponent = __decorate([
    Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.css']
    })
], AuthComponent);
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map
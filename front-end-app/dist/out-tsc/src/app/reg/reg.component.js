import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RegComponent = class RegComponent {
    constructor(checkForm, flashMessages, router, authService) {
        this.checkForm = checkForm;
        this.flashMessages = flashMessages;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    userRegisterClick() {
        const user = {
            name: this.name,
            login: this.login,
            email: this.email,
            password: this.password,
        };
        if (!this.checkForm.checkName(user.name)) {
            this.flashMessages.show("Имя не введено", {
                cssClass: 'alert-danger',
                timeout: 4000
            });
            return false;
        }
        else if (!this.checkForm.checkLogin(user.login)) {
            this.flashMessages.show("Логин не введен", {
                cssClass: 'alert-danger',
                timeout: 4000
            });
            return false;
        }
        else if (!this.checkForm.checkEmail(user.email)) {
            this.flashMessages.show("email не введен", {
                cssClass: 'alert-danger',
                timeout: 4000
            });
            return false;
        }
        else if (!this.checkForm.checkPassword(user.password)) {
            this.flashMessages.show("Пароль не введен", {
                cssClass: 'alert-danger',
                timeout: 4000
            });
            return false;
        }
        this.authService.registerUser(user).subscribe(({ msg, success }) => {
            if (!success) {
                this.flashMessages.show(msg, {
                    cssClass: 'alert-danger',
                    timeout: 2000
                });
                this.router.navigate(['/reg']);
            }
            else {
                this.flashMessages.show(msg, {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
                this.router.navigate(['/auth']);
            }
        });
        return false;
    }
};
RegComponent = __decorate([
    Component({
        selector: 'app-reg',
        templateUrl: './reg.component.html',
        styleUrls: ['./reg.component.css']
    })
], RegComponent);
export { RegComponent };
//# sourceMappingURL=reg.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthDtoResponse = /** @class */ (function () {
    function AuthDtoResponse(success, msg) {
        if (success === void 0) { success = true; }
        if (msg === void 0) { msg = ''; }
        this.success = success;
        this.msg = msg;
    }
    AuthDtoResponse.wrongPassword = function () {
        return new AuthDtoResponse(false, "Wrong password");
    };
    AuthDtoResponse.userNotFound = function () {
        return new AuthDtoResponse(false, "User not found!!");
    };
    AuthDtoResponse.userLogged = function (token, user) {
        var resp = new AuthDtoResponse(true, "You are logged!");
        resp.token = token;
        resp.user = user;
        return resp;
    };
    AuthDtoResponse.userNotRegistered = function () {
        return new AuthDtoResponse(false, "User not registered");
    };
    AuthDtoResponse.userRegistered = function () {
        return new AuthDtoResponse(true, "User registered");
    };
    return AuthDtoResponse;
}());
exports.default = AuthDtoResponse;

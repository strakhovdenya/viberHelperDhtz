"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
// @ts-ignore
var passport_jwt_1 = require("passport-jwt");
// @ts-ignore
var passport_jwt_2 = require("passport-jwt");
var opts = {
    jwtFromRequest: passport_jwt_2.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
};
var strategy = new passport_jwt_1.Strategy(opts, function (jwt_payload, done) {
    user_1.User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
            // or you could create a new account
        }
    });
});
function default_1(passport) {
    passport.use('jwt', strategy);
}
exports.default = default_1;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleElder = void 0;
// @ts-ignore
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var ScheduleSchema = new Schema({
    data: {
        type: String,
        require: true
    },
    year_month: {
        type: String,
        require: true
    },
    time_ice: {
        type: String
    },
    ice_place: {
        type: String
    },
    time_ground: {
        type: String
    },
    gathering_time: {
        type: String
    }
});
exports.ScheduleElder = mongoose_1.default.model('ScheduleElder', ScheduleSchema);
// module.exports.getUserByLogin = function (login, callback) {
//     const query = {login: login};
//     User.findOne(query, callback);
// }
//
// module.exports.getUserById = function (id, callback) {
//     User.findById(id, callback);
// }

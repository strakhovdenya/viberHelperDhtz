"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
    ice_time: {
        type: String
    },
    ice_place: {
        type: String
    },
    ice_gathering_time: {
        type: String
    },
    ground_time: {
        type: String
    },
    ground_place: {
        type: String
    },
    ground_gathering_time: {
        type: String
    },
});
exports.default = ScheduleSchema;

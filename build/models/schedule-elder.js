"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleElder = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var scheduleSchema_1 = __importDefault(require("./schema/scheduleSchema"));
exports.ScheduleElder = mongoose_1.default.model('ScheduleElder', scheduleSchema_1.default);

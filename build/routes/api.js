"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var scheduleRoute = express_1.default.Router();
var schedule_yanger_1 = require("../models/schedule-yanger");
var schedule_elder_1 = require("../models/schedule-elder");
var passport_1 = __importDefault(require("passport"));
scheduleRoute.post('/schedule/junior1', passport_1.default.authenticate('jwt', { session: false }), function (req, res) {
});
scheduleRoute.post('/schedule/elder', passport_1.default.authenticate('jwt', { session: false }), function (req, res) {
    var ops = [];
    var items = req.body;
    items.forEach(function (item) {
        ops.push({
            replaceOne: {
                filter: { data: item.data },
                replacement: item,
                upsert: true
            }
        });
    });
    schedule_elder_1.ScheduleElder.bulkWrite(ops, { ordered: false })
        .then(function () {
        return res.json({ success: true, msg: "Сохранено расписание старших" });
    }).catch(function (error) {
        console.log(error);
        return res.json({ success: false, msg: error });
    });
});
scheduleRoute.get('/schedule/junior/months1', passport_1.default.authenticate('jwt', { session: false }), function (req, res) {
    schedule_yanger_1.ScheduleJunior.distinct('year_month')
        .then(function (dataInBase) {
        return res.json({ data: dataInBase });
    })
        .catch(function (error) {
        console.log(error);
        return res.json({ data: error });
    });
});
scheduleRoute.get('/schedule/junior1/:yearMonth', passport_1.default.authenticate('jwt', { session: false }), function (req, res) {
    console.log('yearMonth111');
    var yearMonth = req.params.yearMonth;
    schedule_yanger_1.ScheduleJunior.find({ year_month: yearMonth })
        .then(function (dataInBase) {
        return res.json({ data: dataInBase });
    })
        .catch(function (error) {
        console.log(error);
        return res.json({ data: error });
    });
});
scheduleRoute.get('/schedule/elder/:yearMonth', passport_1.default.authenticate('jwt', { session: false }), function (req, res) {
    var yearMonth = req.params.yearMonth;
    schedule_elder_1.ScheduleElder.find({ year_month: yearMonth })
        .then(function (dataInBase) {
        return res.json({ data: dataInBase });
    })
        .catch(function (error) {
        console.log(error);
        return res.json({ data: error });
    });
});
exports.default = scheduleRoute;

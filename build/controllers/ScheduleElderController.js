"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var passport_1 = __importDefault(require("passport"));
var schedule_elder_1 = require("../models/schedule-elder");
var ScheduleJuniorController = /** @class */ (function () {
    function ScheduleJuniorController() {
    }
    ScheduleJuniorController.prototype.postLogin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var ops, items, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ops = [];
                        items = req.body;
                        items.forEach(function (item) {
                            ops.push({
                                replaceOne: {
                                    filter: { data: item.data },
                                    replacement: item,
                                    upsert: true
                                }
                            });
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, schedule_elder_1.ScheduleElder.bulkWrite(ops, { ordered: false })];
                    case 2:
                        result = _a.sent();
                        if (result.result.ok === 1) {
                            res.json({ success: true, msg: "Сохранено расписание младших" });
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        res.json({ success: false, msg: e_1 });
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ;
    ScheduleJuniorController.prototype.getMonths = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, schedule_elder_1.ScheduleElder.distinct('year_month')];
                    case 1:
                        result = _a.sent();
                        res.json({ data: result });
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        res.json({ data: e_2 });
                        return [2 /*return*/];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ScheduleJuniorController.prototype.getOneMonth = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var yearMonth, result, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        yearMonth = req.params.yearMonth;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, schedule_elder_1.ScheduleElder.find({ year_month: yearMonth })];
                    case 2:
                        result = _a.sent();
                        res.json({ data: result });
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        res.json({ data: e_3 });
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ScheduleJuniorController.prototype.deleteMonth = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var yearMonth, result, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        yearMonth = req.params.yearMonth;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, schedule_elder_1.ScheduleElder.deleteMany({ year_month: yearMonth })];
                    case 2:
                        result = _a.sent();
                        if (result.ok === 1) {
                            res.json({ success: true, msg: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 " + yearMonth + " \u0443\u0434\u0430\u043B\u0435\u043D\u044B" });
                            return [2 /*return*/];
                        }
                        else {
                            res.json({ success: false, msg: "\u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 " + yearMonth + " \u043D\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u044B" });
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.log(e_4);
                        res.json({ success: false, msg: "\u041E\u0448\u0438\u0431\u043A\u0430!!! \u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430 " + yearMonth + " \u043D\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u044B" });
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        decorators_1.post('/elder'),
        decorators_1.use(passport_1.default.authenticate('jwt', { session: false })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ScheduleJuniorController.prototype, "postLogin", null);
    __decorate([
        decorators_1.get('/elder/months'),
        decorators_1.use(passport_1.default.authenticate('jwt', { session: false })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ScheduleJuniorController.prototype, "getMonths", null);
    __decorate([
        decorators_1.get('/elder/:yearMonth'),
        decorators_1.use(passport_1.default.authenticate('jwt', { session: false })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ScheduleJuniorController.prototype, "getOneMonth", null);
    __decorate([
        decorators_1.del('/elder/months/:yearMonth'),
        decorators_1.use(passport_1.default.authenticate('jwt', { session: false })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], ScheduleJuniorController.prototype, "deleteMonth", null);
    ScheduleJuniorController = __decorate([
        decorators_1.controller('/api/schedule')
    ], ScheduleJuniorController);
    return ScheduleJuniorController;
}());

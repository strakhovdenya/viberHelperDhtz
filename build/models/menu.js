"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var ButtonSchema = new Schema({
    Columns: {
        type: Number,
        required: true,
    },
    Rows: {
        type: Number,
        required: true,
    },
    BgColor: {
        type: String,
        require: true
    },
    Text: {
        type: String,
        require: true
    },
    TextSize: {
        type: String,
        require: true
    },
    ActionType: {
        type: String,
        require: true
    },
    ActionBody: {
        type: String,
        require: true
    },
});
var MenuSchema = new Schema({
    level: {
        type: String,
        require: true
    },
    Type: {
        type: String,
        require: true
    },
    Buttons: {
        type: [ButtonSchema],
        require: true
    },
    Revision: {
        type: Number
    },
});
exports.MenuModel = mongoose_1.default.model('Menu', MenuSchema);

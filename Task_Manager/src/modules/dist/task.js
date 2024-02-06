"use strict";
exports.__esModule = true;
exports.status = void 0;
var mongoose_1 = require("mongoose");
var status;
(function (status) {
    status["ToDo"] = "To Do";
    status["Done"] = "Done";
})(status = exports.status || (exports.status = {}));
var TaskSchema = new mongoose_1["default"].Schema({
    title: String,
    description: String
});

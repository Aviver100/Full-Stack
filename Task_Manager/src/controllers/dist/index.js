"use strict";
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
exports.__esModule = true;
exports.deleteTask = exports.getTask = exports.getTasks = exports.updateTask = exports.creatTask = exports.Tasks = void 0;
var task_1 = require("../modules/task");
var task_2 = require("../modules/task");
exports.Tasks = [];
function creatTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newTaskData, newTask, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newTaskData = req.body;
                    newTaskData.status = task_2.status.ToDo;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    newTask = new task_1.TaskModel(newTaskData);
                    return [4 /*yield*/, newTask.save()];
                case 2:
                    _a.sent();
                    res.send({ task: newTask });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error:', error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.creatTask = creatTask;
function updateTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, taskTitle, taskStatus, updateTask_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.body.id;
                    taskTitle = req.params.title;
                    taskStatus = req.body.status;
                    console.log(id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, task_1.TaskModel.findByIdAndUpdate('65c8c6f8b4e6302b74ba9fb6', { status: task_2.status.Done }, { "new": true })];
                case 2:
                    updateTask_1 = _a.sent();
                    if (!updateTask_1) {
                        console.log('not good');
                        console.log(updateTask_1);
                    }
                    else {
                        console.log('good');
                    }
                    res.json(updateTask_1);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error:', error_2.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateTask = updateTask;
function getTasks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var taskList, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, task_1.TaskModel.find()];
                case 1:
                    taskList = _a.sent();
                    if (!taskList || taskList.length === 0) {
                        res.status(404).send({ message: 'Tasks not found' });
                    }
                    else {
                        res.send(taskList);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error('Error', error_3.message);
                    res.status(500).send('Internal Server Error');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getTasks = getTasks;
function getTask(req, res) {
    var TaskToGet = req.params.id;
    var foundTask = exports.Tasks.find(function (task) { return task.id === TaskToGet; });
    if (!foundTask) {
        res.status(404).send('Task not found');
    }
    else {
        res.send(foundTask);
    }
}
exports.getTask = getTask;
function deleteTask(req, res) {
    var TaskToDelete = req.params.id;
    var foundTask = exports.Tasks.findIndex(function (task) { return task.id === TaskToDelete; });
    if (!foundTask) {
        res.status(404).send('Task not found');
    }
    else {
        exports.Tasks.splice(foundTask, 1);
        res.send(foundTask);
    }
}
exports.deleteTask = deleteTask;

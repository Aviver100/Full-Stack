"use strict";
exports.__esModule = true;
exports.DeleteTask = exports.GetTask = exports.GetTasks = exports.UpdateTask = exports.creatTask = exports.Tasks = void 0;
var uuid_1 = require("uuid");
var TaskStatus_1 = require("../modules/TaskStatus");
exports.Tasks = [];
function creatTask(req, res) {
    var newTask = req.body;
    newTask.status = TaskStatus_1.status.ToDo;
    newTask.id = uuid_1.v4();
    exports.Tasks.push(newTask);
    res.send({ Tasks: exports.Tasks });
    // res.end();
}
exports.creatTask = creatTask;
function UpdateTask(req, res) {
    var TaskToUpdate = req.params.id;
    var foundTask = exports.Tasks.find(function (task) { return task.id === TaskToUpdate; });
    if (!foundTask) {
        res.status(404).send('Task not found');
    }
    else if (req.body.title) {
        foundTask.title = req.body.title;
        foundTask.description = req.body.description;
        foundTask.status = req.body.status;
        res.send(foundTask);
    }
}
exports.UpdateTask = UpdateTask;
function GetTasks(req, res) {
    if (!exports.Tasks || exports.Tasks.length === 0) {
        res.status(404).send('Task not found');
    }
    else {
        res.send(exports.Tasks);
    }
}
exports.GetTasks = GetTasks;
function GetTask(req, res) {
    var TaskToGet = req.params.id;
    var foundTask = exports.Tasks.find(function (task) { return task.id === TaskToGet; });
    if (!foundTask) {
        res.status(404).send('Task not found');
    }
    else {
        res.send(foundTask);
    }
}
exports.GetTask = GetTask;
function DeleteTask(req, res) {
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
exports.DeleteTask = DeleteTask;

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
exports.updateTask = exports.editTask = exports.renderTasks = exports.handleAddTask = exports.handleGetAllTasks = void 0;
var data;
var editBtn = document.querySelector(".edit");
var updateBtn = document.querySelector(".update");
// let deleteBtn = document.querySelector(".delete") as HTMLButtonElement;
function handleGetAllTasks(event) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/tasks")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    renderTasks();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handleGetAllTasks = handleGetAllTasks;
function handleAddTask(event) {
    return __awaiter(this, void 0, void 0, function () {
        var formData, response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    formData = new FormData(event.target);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('/api/tasks/add', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(Object.fromEntries(formData))
                        })];
                case 2:
                    response = _a.sent();
                    renderTasks();
                    if (!response.ok) {
                        throw new Error('Server error');
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    result = _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error('Error:', error_2.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.handleAddTask = handleAddTask;
// let status = values.status === ToDo ? "To Do" : "Done";
function renderTasks() {
    return __awaiter(this, void 0, void 0, function () {
        var tableData, table;
        return __generator(this, function (_a) {
            tableData = "";
            data.map(function (values) {
                var editDelete = 
                // <button class="update" onclick="updateTask()" style="display: none;">Update</button>
                "<button class=\"edit\" onclick=\"editTask()\">Edit</button>\n        <button class=\"update\" onclick=\"updateTask()\">Update</button>\n        <button class=\"delete\" onclick=\"deleteTask()\">Delete</button>";
                tableData +=
                    "<tr>\n        <td contenteditable=\"false\" >" + values.title + "</td>\n        <td contenteditable=\"false\" >" + values.description + "</td>\n        <td>\n        <select name=\"status\" id=\"status\" disabled>\n        <option value=\"" + values.status + "\">To Do</option>\n        <option value=\"Done\">Done</option></td>\n        <td>" + editDelete + "</td>\n        </tr>";
                // <td contenteditable="false" >${status}</td>
            });
            table = document.querySelector('.table_body');
            table.innerHTML = tableData;
            return [2 /*return*/];
        });
    });
}
exports.renderTasks = renderTasks;
function editTask() {
    return __awaiter(this, void 0, void 0, function () {
        var tr_current;
        return __generator(this, function (_a) {
            tr_current = event.currentTarget.parentElement.parentElement;
            tr_current.onclick = function () {
                var table = document.querySelector("table");
                if (table) {
                    for (var i = 1; i < table.rows.length; i++) {
                        table.rows[i].cells[0].contentEditable = "false";
                        table.rows[i].cells[1].contentEditable = "false";
                        table.rows[i].cells[2].children[0].setAttribute("disabled", "true");
                        table.rows[i].cells[3].children[0].setAttribute("disabled", "true");
                        table.rows[i].cells[3].children[1].setAttribute("disabled", "true");
                        table.rows[i].cells[3].children[2].setAttribute("disabled", "true");
                        table.rows[i].cells[0].style.backgroundColor = "white";
                        table.rows[i].cells[1].style.backgroundColor = "white";
                        table.rows[i].cells[2].style.backgroundColor = "white";
                    }
                }
                tr_current.cells[0].contentEditable = "true";
                tr_current.cells[1].contentEditable = "true";
                tr_current.cells[2].children[0].removeAttribute("disabled");
                tr_current.cells[2].children[0].removeAttribute("disabled");
                tr_current.cells[3].children[0].removeAttribute("disabled");
                tr_current.cells[3].children[1].removeAttribute("disabled");
                tr_current.cells[3].children[2].removeAttribute("disabled");
                tr_current.cells[0].style.backgroundColor = "#A9A9A9";
                tr_current.cells[1].style.backgroundColor = "#A9A9A9";
                tr_current.cells[2].style.backgroundColor = "#A9A9A9";
            };
            return [2 /*return*/];
        });
    });
}
exports.editTask = editTask;
function updateTask() {
    return __awaiter(this, void 0, void 0, function () {
        var tr_current;
        return __generator(this, function (_a) {
            tr_current = event.currentTarget.parentElement.parentElement;
            tr_current.onclick = function () {
                var table = document.querySelector("table");
                tr_current.cells[0].contentEditable = "true";
                tr_current.cells[1].contentEditable = "true";
                tr_current.cells[2].children[0].removeAttribute("disabled");
                tr_current.cells[2].children[0].removeAttribute("disabled");
                tr_current.cells[3].children[0].removeAttribute("disabled");
                tr_current.cells[3].children[1].removeAttribute("disabled");
                tr_current.cells[3].children[2].removeAttribute("disabled");
                tr_current.cells[0].style.backgroundColor = "white";
                tr_current.cells[1].style.backgroundColor = "white";
                tr_current.cells[2].style.backgroundColor = "white";
            };
            return [2 /*return*/];
        });
    });
}
exports.updateTask = updateTask;

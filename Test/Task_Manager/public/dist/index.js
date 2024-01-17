"use strict";
exports.__esModule = true;
var index_1 = require("../src/controllers/index");
var tasklist = document.querySelector('.TasksList');
tasklist.innerHTML = "<h1> hkhjk " + JSON.stringify(index_1.Tasks) + " </h1>";

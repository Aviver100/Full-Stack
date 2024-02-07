"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3001;
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded());
app.use(express_1["default"].static('public'));
// app.get('/api/tasks', (req, res) => {res.send({ Tasks });});
// app.post('/api/add-task', addTaskValidation, creatTask);
// app.get('/api/:id', GetTask);
// app.patch('/api/:id', UpdateTask);
// app.delete('/api/:id', DeleteTask);
// app.get('/api/tasks', GetTasks);
var tasks_1 = require("./routes/tasks");
app.use("/api/tasks", tasks_1["default"]);
app.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});

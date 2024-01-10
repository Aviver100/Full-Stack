"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_1 = require("./controllers/index");
var index_2 = require("./controllers/index");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(express_1["default"].static('public'));
app.get('/api/customers', function (req, res) {
    res.send({ Customers: index_2.Customers });
});
app.post('/api/add-customer', index_1.creatCustomer);
app.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});

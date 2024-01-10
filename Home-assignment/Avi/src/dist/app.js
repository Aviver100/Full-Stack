"use strict";
exports.__esModule = true;
var express_1 = require("express");
var products_1 = require("./routes/products");
var app = express_1["default"]();
var port = 4000;
// Enable static files
app.use(express_1["default"].static('public'));
// Enable JSON body parsing
app.use(express_1["default"].json());
// Register products APIs
app.use("/api/products", products_1["default"]);
app.listen(port, function () {
    console.log("Server is listening on http://localhost:" + port);
});

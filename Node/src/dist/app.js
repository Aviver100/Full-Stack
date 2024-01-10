"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
var Products = [];
app.post("/api/product", function (req, res) {
    var newProduct = req.body;
    var index = Products.findIndex(function (item) { newProduct.name === item.name; });
    if (!index) {
        Products.push(newProduct);
        console.log(newProduct);
        res.send({ Products: Products });
    }
    else {
        throw ("the name " + newProduct.name + " in use");
        // }
    }
});
app.get("/api/products", function (req, res) {
    res.send(Products);
});
app.listen(port, function () {
    console.log("server http://loclhost/" + port + " run");
});

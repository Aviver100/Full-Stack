"use strict";
exports.__esModule = true;
exports.creatCustomer = exports.Customers = void 0;
exports.Customers = [];
function creatCustomer(req, res) {
    var newCustomer = req.body;
    exports.Customers.push(newCustomer);
    res.send({ Customers: exports.Customers });
}
exports.creatCustomer = creatCustomer;

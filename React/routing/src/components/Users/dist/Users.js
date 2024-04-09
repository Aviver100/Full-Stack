"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var UserPage_1 = require("../UserPage/UserPage");
function navbar() {
    var router = react_router_dom_1.createBrowserRouter([{
            path: "/user/:id",
            element: react_1["default"].createElement(UserPage_1["default"], null)
        }]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/user/1" }, " Uesr 1"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/user/2" }, " Uesr 2"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/user/3" }, " Uesr 3"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/user/4" }, " Uesr 4"),
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/user/5" }, " Uesr 5"),
        react_1["default"].createElement(react_router_dom_1.RouterProvider, { router: router })));
}
exports["default"] = navbar;

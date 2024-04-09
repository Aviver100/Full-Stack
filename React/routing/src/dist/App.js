"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var UserPage_1 = require("./components/UserPage/UserPage");
var Users_1 = require("./components/Users/Users");
function App() {
    var router = react_router_dom_1.createBrowserRouter([
        { path: "/user/:id", element: react_1["default"].createElement(UserPage_1["default"], null) }
    ]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(Users_1["default"], null)))));
}
exports["default"] = App;

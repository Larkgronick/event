"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
// import React from 'react';
require("./App.css");
function App() {
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: 'App' }, { children: (0, jsx_runtime_1.jsxs)("header", __assign({ className: 'App-header' }, { children: [(0, jsx_runtime_1.jsx)("img", { src: '', alt: '' }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'Container' }, { children: [(0, jsx_runtime_1.jsx)("button", { children: "Learn More" }, void 0), (0, jsx_runtime_1.jsx)("button", { children: "Register" }, void 0)] }), void 0)] }), void 0) }), void 0));
}
exports["default"] = App;

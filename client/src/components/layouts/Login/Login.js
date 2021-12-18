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
var grommet_1 = require("grommet");
var Login = function () {
    return ((0, jsx_runtime_1.jsx)(grommet_1.Grommet, __assign({ plain: true }, { children: (0, jsx_runtime_1.jsx)(grommet_1.Box, __assign({ direction: 'column', border: { color: 'slategrey', size: 'small' }, width: 'medium', height: 'large', round: 'small', pad: 'medium', animation: { type: 'jiggle', size: 'xlarge' } }, { children: (0, jsx_runtime_1.jsxs)(grommet_1.Form, { children: [(0, jsx_runtime_1.jsx)(grommet_1.FormField, __assign({ name: 'email', htmlFor: 'email', label: 'Email' }, { children: (0, jsx_runtime_1.jsx)(grommet_1.TextInput, { id: 'email', type: 'text', name: 'email', placeholder: 'frank_sinatra@email.com' }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(grommet_1.FormField, __assign({ name: 'password', htmlFor: 'password', label: 'Password' }, { children: (0, jsx_runtime_1.jsx)(grommet_1.TextInput, { id: 'password', type: 'password', name: 'password', placeholder: '**********' }, void 0) }), void 0)] }, void 0) }), void 0) }), void 0));
};
exports["default"] = Login;

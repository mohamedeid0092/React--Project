"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _countReducer = _interopRequireDefault(require("./countReducer"));

var _Productreducer = _interopRequireDefault(require("./Productreducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  count: _countReducer["default"],
  products: _Productreducer["default"]
});

exports["default"] = _default;
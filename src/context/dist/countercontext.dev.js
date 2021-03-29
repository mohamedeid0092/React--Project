"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CounterContextProvider = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CounterContext = _react["default"].createContext({
  Count: 0,
  SetCount: function SetCount() {}
});

var CounterContextProvider = CounterContext.Provider;
exports.CounterContextProvider = CounterContextProvider;
var _default = CounterContext;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Counter;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../store/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Counter(props) {
  var state = (0, _reactRedux.useSelector)(function (state) {
    return state;
  });
  console.log(state);
}
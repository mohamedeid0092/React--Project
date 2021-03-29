"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetCounter = void 0;

var SetCounter = function SetCounter(payload) {
  return {
    type: "SET_COUNTING",
    payload: payload
  };
};

exports.SetCounter = SetCounter;
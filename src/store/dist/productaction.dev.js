"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = void 0;

var _axiosInstance = require("../axiosInstance");

var getProducts = function getProducts() {
  return function (dispatch) {
    _axiosInstance.axiosInstance.get("/products").then(function (response) {
      dispatch({
        type: "Set_Product",
        payload: response.data
      });
    })["catch"](function (error) {
      console.log(error);
    });
  };
};

exports.getProducts = getProducts;
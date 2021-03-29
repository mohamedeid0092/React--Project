import { combineReducers } from "redux";
import count from './countReducer';
import products from "./Productreducer";

export default combineReducers({
    count,
    products,
  });
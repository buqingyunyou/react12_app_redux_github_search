// 整合多个reducer函数 combineReducers
import { combineReducers } from "redux";

function users(preState = [], action) {
  switch (action.type) {
    case "SET_USERS":
      return action.data;
    default:
      return preState;
  }
}

function loading(preState = false, action) {
  switch (action.type) {
    case "SET_LOADING":
      return action.data;
    default:
      return preState;
  }
}

export default combineReducers({ users, loading });

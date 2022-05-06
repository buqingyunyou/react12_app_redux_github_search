import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
// react异步编程库
import thunk from "redux-thunk";
// 调试工具库
import { composeWithDevTools } from "redux-devtools-extension";

let middleware = applyMiddleware(thunk);
if (process.env.NODE_ENV === "development") {
  // 开发环境，需要使用到开发调试库
  middleware = composeWithDevTools(applyMiddleware(thunk));
}

const store = createStore(reducers, middleware);
export default store;

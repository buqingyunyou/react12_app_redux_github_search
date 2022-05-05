import "./App.css";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* search */}
        <div className="header">
          <h2>Search Github Users</h2>
          <div className="input_search">
            <input placeholder="enter the name you search" />
            <button>Search</button>
          </div>
        </div>

        {/* UserList */}
        <div className="user_list">
          <ul>
            <li>
              <a className="img" href="###">
                <img
                  src={require("./assets/static/01.jpg")}
                  alt="图片加载错误"
                />
              </a>
              <p>ss</p>
            </li>
            <li>
              <a className="img" href="###">
                <img
                  src={require("./assets/static/02.jpg")}
                  alt="图片加载错误"
                />
              </a>
              <p>xx</p>
            </li>
            <li>
              <a className="img" href="###">
                <img
                  src={require("./assets/static/03.jpg")}
                  alt="图片加载错误"
                />
              </a>
              <p>aa</p>
            </li>
            <li>
              <a className="img" href="###">
                <img
                  src={require("./assets/static/04.jpg")}
                  alt="图片加载错误"
                />
              </a>
              <p>arefa</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

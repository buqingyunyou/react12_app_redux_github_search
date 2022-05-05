import React from "react";
export default class UserList extends React.Component {
  render() {
    return (
      <div>
        <div className="user_list">
          <ul>
            <li>
              <a className="img" href="###">
                <img
                  src={require("../../assets/static/01.jpg")}
                  alt="图片加载错误"
                />
              </a>
              <p>ss</p>
            </li>
            <li>
              <a className="img" href="###">
                <img
                  src={require("../../assets/static/02.jpg")}
                  alt="图片加载错误"
                />
              </a>
              <p>xx</p>
            </li>
            <li>
              <a className="img" href="###">
                <img
                  src={require("../../assets/static/03.jpg")}
                  alt="图片加载错误"
                />
              </a>
              <p>aa</p>
            </li>
            <li>
              <a className="img" href="###">
                <img
                  src={require("../../assets/static/04.jpg")}
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

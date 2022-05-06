import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UserList extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
  };
  // 此处数据，由redux进行管理
  render() {
    const { loading, users } = this.props;
    if (loading) {
      return (
        <div className="user_list">
          <h3>isLoading...</h3>
        </div>
      );
    }
    if (!users.length) {
      return (
        <div className="user_list">
          <div>Please search the users...</div>
        </div>
      );
    }
    return (
      <div>
        <div className="user_list">
          <ul>
            {users.map((item) => {
              return (
                <li key={item.key}>
                  <a className="img" href="###" link={item.html_url}>
                    <img src={item.avatar_url} alt="图片加载错误" />
                  </a>
                  <p>{item.login}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.loading,
    users: state.users,
  }),
  null
)(UserList);

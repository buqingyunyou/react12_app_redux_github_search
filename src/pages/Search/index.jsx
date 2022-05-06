import React from "react";
import { connect } from "react-redux";
import { setLoading, getSearch } from "../../redux/action-creators";
import PropTypes from "prop-types";

class Search extends React.Component {
  static propTypes = {
    setLoading: PropTypes.func.isRequired,
    getSearch: PropTypes.func.isRequired,
  };
  state = {
    username: "",
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value.trim(),
    });
  };
  search = async () => {
    const { getSearch, setLoading } = this.props;
    const { username } = this.state;
    if (!username) {
      alert("请输入查询用户名");
      return;
    }
    setLoading(true);
    await getSearch(username);
    setLoading(false);
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <div className="header">
          <h2>Search Github Users</h2>
          <div className="input_search">
            <input
              value={username}
              onChange={this.handleChange}
              placeholder="enter the name you search"
            />
            <button onClick={this.search}>Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setLoading, getSearch })(Search);

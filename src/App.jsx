import "./App.css";
import React from "react";
import Search from "./pages/Search";
import UserList from "./pages/UserList";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* search */}
        <Search />

        {/* UserList */}
        <UserList />
      </div>
    );
  }
}

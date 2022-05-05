
import React from "react";
export default class Search extends React.Component{
  render(){

    return (
      <div>
        <div className="header">
          <h2>Search Github Users</h2>
          <div className="input_search">
            <input placeholder="enter the name you search" />
            <button>Search</button>
          </div>
        </div>
      </div>
    )
  }
}
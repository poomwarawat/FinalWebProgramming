import React, { Component } from "react";

export default class ToTop extends Component {
  handelClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <div>
        <div className="ToTop">
          <button className="btn btn-primary" onClick={this.handelClick}>
            ToTop
          </button>
        </div>
      </div>
    );
  }
}

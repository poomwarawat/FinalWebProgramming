import React, { Component } from "react";
import Header from "../component/Header";
import PicSlide from "../component/PicSlide";
export default class About extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container pt-4 detial">
          <h1>About Us</h1>
          <PicSlide></PicSlide>
        </div>
      </div>
    );
  }
}

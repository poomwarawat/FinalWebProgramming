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
          <h5 className="text-center mt-4">
            Runrena is an online society of runners. <br></br>Runners can actually participate in the running event through the website. <br></br>under the
            concept of the founders and developers that "Run UNTIL BIB"
          </h5>
          <h6 className="text-center ">If health is important Therefore, running is important.</h6>
        </div>
      </div>
    );
  }
}

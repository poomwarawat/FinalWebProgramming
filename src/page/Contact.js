import React, { Component } from "react";
import Header from "../component/Header";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container pt-4 detial">
          <h1>Contact</h1>
          <h3>Runrena Co., Ltd.</h3>
          <h3>runrena@mail.com</h3>
          <h6>Anuwat Sutkhong : Sales representative</h6>
          <h6>Phuvis Vilairatana : Chief Technology Officer </h6>
          <h6>Warawat Sutkhong : Chief of Janitor </h6>
        </div>
      </div>
    );
  }
}

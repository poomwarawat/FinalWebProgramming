import React, { Component } from "react";
import { Fade } from "reactstrap";

export default class FadeWarning extends Component {
  render() {
    return (
      <div>
        <Fade in={true} tag="h5" className="mt-3 text-center text-success">
          Event Created Successfully.
        </Fade>
      </div>
    );
  }
}

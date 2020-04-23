import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {
  x = 50;
  y = 50;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 1000).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = (p5) => {
    p5.background(0);
    if (p5.mouseIsPressed) {
      p5.fill(0);
    } else {
      p5.fill(255);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}

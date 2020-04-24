import React, { Component } from "react";
import background from "./background.png";
import dog from "./anuwat.png";
import cat from "./cat.png";
import cloud from "./cloud.png";
import Sketch from "react-p5";
let bImg;
let dImg;
let cImg;
let cloudImg;
let dogClass;
let cloudClass;
let cats = [];
var score = 0;
let timeStamp = 0;
let timeStampScore = 0;
let pushObject = true;
let randomTime = 0;
let gameOver = false;
let startGame = true;
export default class Game extends Component {
  x = 50;
  y = 50;
  state = {
    jump: 0,
  };
  preload = (p5) => {
    bImg = p5.loadImage(background);
    dImg = p5.loadImage(dog);
    cImg = p5.loadImage(cat);
    cloudImg = p5.loadImage(cloud);
  };
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 500).parent(canvasParentRef);
    dogClass = new Dog(p5);
    cloudClass = new Cloud(p5);
  };
  draw = (p5) => {
    let random = [600, 1000, 1100, 1500, 850, 900, 950];

    p5.background(bImg);
    if (startGame == true) {
      p5.textSize(20);
      p5.fill(0, 102, 153);
      p5.text("space to start runrena game", p5.width / 2 - 100, p5.height / 2 - 100);
    }
    if (startGame == false) {
      p5.textSize(32);
      p5.fill(0, 102, 153);
      if (p5.millis() - timeStamp > 100) {
        score = score + 1;
        timeStamp = p5.millis();
      }
      p5.text(score, 50, 50);
      for (let cat of cats) {
        cat.move();
        cat.show(p5);
        if (dogClass.hits(cat, p5)) {
          startGame = true;
          cats = [];
          this.setState({ jump: score });
          this.props.scoreChange(this.state.jump);
          score = 0;
          p5.noLoop();
        }
      }
      if (score % 100 === 0) {
        console.log("score");
      }
      dogClass.show(p5);
      dogClass.move(p5);
      cloudClass.show(p5);
      cloudClass.move(p5);
    }

    if (pushObject) {
      if (p5.millis() - timeStampScore > random[randomTime]) {
        cats.push(new Cat(p5));
        timeStampScore = p5.millis();
        randomTime = Math.floor(Math.random() * 7);
        pushObject = false;
      }
    } else if (pushObject === false) {
      if (p5.millis() - timeStampScore > random[randomTime]) {
        pushObject = true;
      }
    }
  };

  keyPressed = (p5) => {
    if (p5.key == " " && startGame == true) {
      console.log("Game -> keyPressed -> startGame", startGame);
      if (startGame) {
        startGame = false;
        p5.loop();
      }
    }

    if (p5.key == " ") {
      dogClass.jump(p5);
    }
  };

  render() {
    return (
      <div>
        <Sketch setup={this.setup} draw={this.draw} keyPressed={this.keyPressed} preload={this.preload} />
      </div>
    );
  }
}

class Dog {
  constructor(p5) {
    this.r = 70;
    this.x = 50;
    this.y = p5.height - this.r;
    this.vy = 0;
    this.gravity = 3;
  }

  jump(p5) {
    if (this.y == p5.height - this.r) {
      this.vy = -35;
    }
  }

  hits(cats, p5) {
    let x1 = this.x + this.r * 0.1;
    let y1 = this.y + this.r * 0.1;
    let x2 = cats.x + cats.r * 0.5;
    let y2 = cats.y + cats.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, cats.r, p5);
  }

  move(p5) {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = p5.constrain(this.y, 0, p5.height - this.r);
  }

  show(p5) {
    p5.image(dImg, this.x, this.y, this.r, this.r);
    // p5.fill(255, 50);
    // p5.ellipseMode(p5.CORNER);
    // p5.ellipse(this.x, this.y, this.r, this.r);
  }
}
const collideCircleCircle = (x, y, d, x2, y2, d2, p5) => {
  if (p5.dist(x, y, x2, y2) <= d / 2 + d2 / 2) {
    return true;
  }
  return false;
};
class Cat {
  constructor(p5) {
    this.r = 70;
    this.x = p5.width;
    this.y = p5.height - this.r;
  }

  move() {
    this.x -= 10;
  }

  show(p5) {
    p5.image(cImg, this.x, this.y, this.r, this.r);
    // p5.fill(255, 50);
    // p5.ellipseMode(p5.CORNER);
    // p5.ellipse(this.x, this.y, this.r, this.r);
  }
}

class Cloud {
  constructor(p5) {
    this.x = p5.width - 200;
    this.y = 100;
  }

  show(p5) {
    p5.image(cloudImg, this.x, 50, 150, 75);
  }
  move(p5) {
    if (this.x <= p5.width + 100 && this.x > -150) {
      this.x = this.x - 10;
      //console.log("Cloud -> move -> this.x", this.x);
    }
    if (this.x <= -150) {
      this.x = p5.width + 100;
    }
  }
}

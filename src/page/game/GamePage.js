import React, { Component } from "react";
import Nevigator from "../../component/Nevigator";
import Game from "../../page/game/Game";
import { Row, Col, Container } from "reactstrap";
import API from "../../API/API";
export default class GamePage extends Component {
  state = {
    score: 0,
    userId: "",
    maxScoreData: "",
  };
  onScoreChange = (score) => {
    console.log("GamePage -> onScoreChange -> score", score);
    let data = new FormData();
    data.append("score", score);
    data.append("userId", this.state.userId);
    API.post("/score", data).then((res) => {});
    API.get("/score").then((res) => {
      this.setState({ maxScoreData: res.data });
    });
    this.setState({ score: score });
  };
  componentDidMount = async () => {
    const Key = new FormData();
    Key.append("token", localStorage.getItem("key"));
    await API.post("/auth-token", Key).then((res) => {
      if (res.data.userId) {
        this.setState({
          userId: res.data.userId,
        });
      }
    });
    API.get("/score").then((res) => {
      this.setState({ maxScoreData: res.data });
    });
  };
  render() {
    const { maxScoreData } = this.state;
    return (
      <div>
        <Row>
          <Col md="3">
            <Nevigator />
          </Col>
          <Col md="8">
            <Container>
              <h1 className="text-center mt-3">Runrena Game</h1>
            </Container>
            <Game scoreChange={this.onScoreChange} />
            <Row>
              <Col md="8">
                <h3>Your're Score : {this.state.score}</h3>
                <p>All Range</p>
              </Col>
              <Col md="4">
                {maxScoreData ? <h3>Best Score : {maxScoreData[0]["MAX(runrena.game.score)"]} </h3> : null}
                {maxScoreData ? <p>By : {maxScoreData[0]["firstname"]}</p> : null}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

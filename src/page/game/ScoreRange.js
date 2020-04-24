import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import Nevigator from "../../component/Nevigator";
import { Table } from "reactstrap";
import API from "../../API/API";
export default class ScoreRange extends Component {
  state = {
    maxScoreData: [],
  };
  componentDidMount = () => {
    API.get("/score").then((res) => {
      this.setState({ maxScoreData: res.data });
    });
  };
  renderTable = () => {
    const message = this.state.maxScoreData.map((data, index) => {
      console.log("ScoreRange -> renderTable -> data", data);
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{data["firstname"]}</td>
          <td>{data["MAX(runrena.game.score)"]}</td>
        </tr>
      );
    });
    console.log("ScoreRange -> renderTable -> message", message);
    return message;
  };
  render() {
    return (
      <div>
        <Row>
          <Col md="3">
            <Nevigator />
          </Col>
          <Col md="8">
            <h1>Runrena Score</h1>
            <Table striped>
              <thead>
                <tr>
                  <th>Range</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

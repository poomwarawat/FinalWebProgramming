import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigator from "../component/Nevigator";
class Event extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={3}>
            <Navigator />
          </Col>
          <Col md={9}>
            <h1>BBB</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Event;

import React, { Component } from "react";
import { Row, Col, Jumbotron, Button, Badge, Alert } from "reactstrap";
import { Link } from "react-router-dom";
export default class StatusSummary extends Component {
  render() {
    const { event } = this.props;
    let paymentState = "XXXX";
    let stateList = ["registered", "pending", "success", "incorrect"];
    let styleList = ["light", "warning", "success", "danger"];
    console.log("StatusSummary -> render -> event", event);
    paymentState = stateList[event["paymentState"]];
    styleList = styleList[event["paymentState"]];
    let title = event["title"].slice(0, 45) + "...";

    return (
      <Col md="6">
        <Row>
          <Col md="12">
            <Alert color="secondary">
              <Row>
                <Col md="12">
                  <p className="font-weight-bold">{title}</p>
                </Col>
                <Col md="12">
                  <Badge color={styleList}>{paymentState}</Badge>
                  <Badge color="info" className="ml-1">
                    {event["event_date"].slice(0, 10)}{" "}
                  </Badge>
                  <Badge color="primary" className="ml-1">
                    {event["category"]}{" "}
                  </Badge>
                </Col>
              </Row>
            </Alert>
          </Col>
        </Row>
      </Col>
    );
  }
}

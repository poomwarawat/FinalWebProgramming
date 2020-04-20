import React, { Component } from "react";
import Nevigator from "../../component/Nevigator";
import { Row, Col, Container } from "reactstrap";
import PaymentState from "./PaymentStateList";
import EventList from "./EventList";
import API from "../../API/API";
export default class AdminRunningEvent extends Component {
  state = {
    eventPaymentState: null,
  };
  componentDidMount = () => {
    API.get("/payment-state").then((res) => {
      this.setState({ eventPaymentState: res.data });
    });
  };
  render() {
    return (
      <div>
        <Row>
          <Col md="2">
            <Nevigator />
          </Col>
          <Col md="10" sm="12">
            <h1>Payment</h1>
            {this.state.eventPaymentState ? <PaymentState eventPaymentState={this.state.eventPaymentState} /> : null}
          </Col>
        </Row>
      </div>
    );
  }
}

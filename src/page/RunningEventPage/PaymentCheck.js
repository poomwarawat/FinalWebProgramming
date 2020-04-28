import React, { Component } from "react";
import { Form, Col, Row, Input, FormGroup, Label, Button } from "reactstrap";
import API from "../../API/API";
class PaymentCheck extends Component {
  state = {
    amount: null,
    date: null,
    time: null,
  };
  handelChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handelSubmit = async (e) => {
    e.preventDefault();
    let Data = new FormData();
    Data.append("price", this.state.amount);
    Data.append("date", this.state.date);
    Data.append("time", this.state.time);
    Data.append("eventId", this.props.eventId);
    Data.append("userId", this.props.userId);
    await API.put("/event-checkout", Data).then((res) => {
      console.log("PaymentCheck -> handelSubmit -> res", res.data);
      window.location.reload();
    });
    console.log("submit");
  };
  render() {
    return (
      <div>
        <Form className="mt-3" onSubmit={this.handelSubmit}>
          <FormGroup className="mb-1">
            <Label for="amount">Amount</Label>
            <Input type="number" name="amount" id="amount" required onChange={this.handelChange} />
          </FormGroup>
          <FormGroup row>
            <Col className="mb-1">
              <Label for="date">Date Payment</Label>
              <Input type="date" name="date" id="date" required onChange={this.handelChange} />
            </Col>
            <Col>
              <Label for="time">Time Payment</Label>
              <Input type="time" name="time" id="time" required onChange={this.handelChange} />
            </Col>
          </FormGroup>
          <Button className="btn-block">Report</Button>
        </Form>
      </div>
    );
  }
}

export default PaymentCheck;

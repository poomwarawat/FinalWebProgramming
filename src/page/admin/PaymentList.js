import React, { Component } from "react";
import { Table, Button, Badge } from "reactstrap";
import API from "../../API/API";
export default class PaymentList extends Component {
  state = {
    eventData: this.props.eventsPaymentState,
  };
  handelCheck = () => {
    let data = new FormData();
    data.append("userId", this.state.eventData["userId"]);
    data.append("eventId", this.state.eventData["eventId"]);
    data.append("state", "2");
    API.put("/payment-state", data).then((res) => {
      window.location.reload();
    });
  };
  handelCorrect = () => {
    let data = new FormData();
    data.append("userId", this.state.eventData["userId"]);
    data.append("eventId", this.state.eventData["eventId"]);
    data.append("state", "3");
    API.put("/payment-state", data).then((res) => {
      window.location.reload();
    });
  };
  render() {
    let { eventsPaymentState } = this.props;
    let price = 0;
    let date_payment;
    let state = "";
    if (eventsPaymentState["date_payment"]) {
      date_payment = eventsPaymentState["date_payment"].split("T", 1);
    } else {
      date_payment = "-";
    }
    if (eventsPaymentState["category"] === "funrun") {
      price = eventsPaymentState["funrun_price"];
    } else if (eventsPaymentState["category"] === "minimarathon") {
      price = eventsPaymentState["mini_price"];
    } else if (eventsPaymentState["category"] === "halfmarathon") {
      price = eventsPaymentState["half_price"];
    } else if (eventsPaymentState["category"] == "marathon") {
      price = eventsPaymentState["marathon_price"];
    } else {
      price = "-";
    }

    if (eventsPaymentState["paymentState"] === 0) {
      state = "ยังไม่ชำระเงิน";
    } else if (eventsPaymentState["paymentState"] === 1) {
      state = "แจ้งชำระเงินแล้ว";
    }

    return (
      <tr>
        <td>{eventsPaymentState.userId}</td>
        <td>{eventsPaymentState.eventId}</td>
        <td className="text-center">
          {eventsPaymentState["paymentState"] == 0 ? (
            <h5>
              <Badge color="warning">ยังไม่แจ้งชำระเงิน</Badge>
            </h5>
          ) : null}

          {eventsPaymentState["paymentState"] == 1 ? (
            <h5>
              <Badge color="info">แจ้งชำระเงินแล้ว</Badge>
            </h5>
          ) : null}

          {eventsPaymentState["paymentState"] == 2 ? (
            <h5>
              <Badge color="success">ชำระเงินแล้ว</Badge>
            </h5>
          ) : null}
          {eventsPaymentState["paymentState"] == 3 ? (
            <h5>
              <Badge color="danger">การชำระเงินไม่ถูกต้อง</Badge>
            </h5>
          ) : null}
        </td>
        <td>{eventsPaymentState.payment_amount}</td>
        <td>{date_payment}</td>
        <td>{eventsPaymentState.time}</td>
        <td>{eventsPaymentState.category}</td>
        <td>{price}</td>
        <td>
          <Button color="success" size="sm" onClick={this.handelCheck} className="mr-1" onClick={this.handelCheck}>
            Correct
          </Button>
          <Button size="sm" onClick={this.handelCheck} onClick={this.handelCorrect} color="danger">
            Incorrect
          </Button>
        </td>
      </tr>
    );
  }
}

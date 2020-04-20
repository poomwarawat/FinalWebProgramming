import React, { Component } from "react";
import { Table } from "reactstrap";
import PaymentList from "../admin/PaymentList";
export default class PaymentState extends Component {
  state = {
    eventPaymentState: this.props.eventPaymentState,
  };
  render() {
    console.log("data", this.state.eventPaymentState);
    return (
      <div>
        {" "}
        <Table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Event Id</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Time</th>
              <th>Category</th>
              <th>Price</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {this.state.eventPaymentState &&
              this.state.eventPaymentState.map((event) => {
                return <PaymentList eventsPaymentState={event} key={Math.random()} />;
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

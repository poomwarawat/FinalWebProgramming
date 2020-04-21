import React, { Component } from "react";
import { Row, Col, Jumbotron, Button, Badge } from "reactstrap";
import StatusSummary from "../RunningEventPage/StatusSummary";
export default class StatusList extends Component {
  render() {
    const { eventData } = this.props;
    return (
      <div>
        <Row>
          {eventData &&
            eventData.map((event) => {
              return <StatusSummary event={event} key={Math.random()} />;
            })}
        </Row>
      </div>
    );
  }
}

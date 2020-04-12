import React, { Component } from "react";

import EventSummary from "../RunningEvent/EventSummary";
import { Row } from "reactstrap";
export default class EventList extends Component {
  state = {
    events: this.props.events,
  };
  render() {
    const { events } = this.state;

    return (
      <div>
        <Row>
          {events &&
            events.map((event) => {
              return <EventSummary events={event} key={Math.random()} />;
            })}
        </Row>
      </div>
    );
  }
}

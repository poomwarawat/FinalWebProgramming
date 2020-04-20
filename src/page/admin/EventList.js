import React, { Component } from "react";
import EventSummary from "./EventSummary";
import { Button } from "reactstrap";

export default class EventList extends Component {
  render() {
    const { eventData } = this.props;
    return (
      <tbody className="text-center">
        {eventData &&
          eventData.map((event) => {
            return <EventSummary eventData={event} key={event["eventId"]} />;
          })}
      </tbody>
    );
  }
}

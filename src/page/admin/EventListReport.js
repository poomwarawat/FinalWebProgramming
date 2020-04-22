import React, { Component } from "react";
import EventSummary from "./EventSummary";
import { Button } from "reactstrap";
import EventListSummary from "../admin/EventListReportSummary";
export default class EventListReport extends Component {
  render() {
    const { eventData, event } = this.props;
    return (
      <tbody className="text-center">
        {eventData &&
          eventData.map((event) => {
            return <EventListSummary eventData={event} key={event["bib_number"]} />;
          })}
      </tbody>
    );
  }
}

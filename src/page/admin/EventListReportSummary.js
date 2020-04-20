import React, { Component } from "react";

export default class EventListReportSummary extends Component {
  render() {
    const { eventData } = this.props;
    console.log("EventListReportSummary -> render -> eventData", eventData);
    return (
      <tr>
        <td>{eventData["bib_number"]}</td>
        <td>{eventData["userId"]}</td>
        <td>
          {eventData["firstname"]} + {eventData["lastname"]}
        </td>
        <td>{eventData["email"]}</td>
      </tr>
    );
  }
}

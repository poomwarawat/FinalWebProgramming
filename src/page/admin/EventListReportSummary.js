import React, { Component } from "react";
import API from "../../API/API";
export default class EventListReportSummary extends Component {
  render() {
    const { eventData } = this.props;
    return (
      <tr>
        <td>{eventData["bib_number"]}</td>
        <td>{eventData["userId"]}</td>
        <td>{eventData["firstname"] + eventData["lastname"]}</td>
        <td>{eventData["email"]}</td>
      </tr>
    );
  }
}

import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
export default class EventSummary extends Component {
  render() {
    const { eventData } = this.props;
    let eventDate = eventData["event_date"].split("T", 1);
    return (
      <tr>
        <td>{eventData["eventId"]}</td>
        <td>{eventData["title"]}</td>
        <td>{eventDate}</td>
        <td>
          <Link to={"event-manage/" + eventData["eventId"]}>
            <Button size="sm">Manage</Button>
          </Link>
        </td>
      </tr>
    );
  }
}

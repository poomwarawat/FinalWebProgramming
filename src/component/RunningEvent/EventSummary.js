import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Card, CardImg, CardText, CardBody, CardTitle, CardHeader } from "reactstrap";
export default class EventSummary extends Component {
  render() {
    const { events } = this.props;
    let date = events["event_date"].split("T", 1);
    return (
      <Col sm="12" md="4" className="mt-2">
        <Card className="h-100">
          <CardHeader>{events.title}</CardHeader>
          <CardImg top width="100%" src={events["imageUrl"]} alt="Card image cap" className="b-img-event" />
          <CardBody>
            <CardTitle>Date : {date[0]}</CardTitle>
            <CardText className="b-address-area">
              <p>Location : {events.address}</p>
            </CardText>
            <Link to={"events/" + events.eventId}>
              <Button size="sm">Register</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

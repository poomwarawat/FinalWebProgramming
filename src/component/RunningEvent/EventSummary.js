import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
  CardHeader,
} from "reactstrap";
export default class EventSummary extends Component {
  render() {
    const { events } = this.props;
    let date = events["event_date"].split("T", 1);
    return (
      <Col sm="12" md="4" className="mt-2">
        <Card className="h-100">
          <CardHeader>{events.title}</CardHeader>
          <CardImg
            top
            width="100%"
            src="https://storage.googleapis.com/s.race.thai.run/files/f12195ba-84e9-49e3-935f-13609c9f64fa.jpeg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Date : {date[0]}</CardTitle>
            <CardText>Location : {events.address}</CardText>
            <Link to={"events/" + events.eventId}>
              <Button size="sm">Register</Button>
            </Link>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

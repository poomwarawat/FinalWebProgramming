import React, { Component } from "react";
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
        <Card>
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
            <Button>Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

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

    return (
      <Col sm="12" md="4" className="mt-2">
        <Card>
          <CardHeader>{events.title}</CardHeader>
          <CardImg
            top
            width="100%"
            src="https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1249&q=80"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

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
import Navigator from "../../component/Nevigator";
import EventList from "../../component/RunningEvent/EventList";
class Event extends Component {
  handelClick = () => {
    this.props.history.push("/create-event");
  };
  render() {
    const events = [
      { title: "Anuwat", description: "Run for dad", date: "24-09-20" },
      { title: "Sukthong", description: "Run for mom", date: "25-09-20" },
      { title: "Bon", description: "Run for granpa", date: "26-09-20" },
      { title: "Bon", description: "Run for granpa", date: "26-09-20" },
      { title: "Bon", description: "Run for granpa", date: "26-09-20" },
      { title: "Bon", description: "Run for granpa", date: "26-09-20" },
      { title: "Bon", description: "Run for granpa", date: "26-09-20" },
      { title: "Bon", description: "Run for granpa", date: "26-09-20" },
      { title: "Bon", description: "Run for granpa", date: "26-09-20" },
    ];
    return (
      <div>
        <Row>
          <Col md={3}>
            <Navigator />
          </Col>
          <Col md={8}>
            <Jumbotron>
              <h1 className="display-5">Runrena Event</h1>
              <p className="lead">
                This is the best place in the world to find running events to proving you look so cool and best good
                runner in the world
              </p>
              <hr className="my-2" />
              <Button onClick={this.handelClick}>Create Event</Button>
            </Jumbotron>
            <EventList events={events} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Event;

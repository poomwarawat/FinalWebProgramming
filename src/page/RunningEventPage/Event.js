import React, { Component } from "react";
import { Row, Col, Jumbotron, Button } from "reactstrap";
import Navigator from "../../component/Nevigator";
import EventList from "../../component/RunningEvent/EventList";
import API from "../../API/API";
class Event extends Component {
  state = {
    events: null,
  };
  handelClick = () => {
    this.props.history.push("/create-event");
  };
  componentDidMount = () => {
    API.get("/event").then((res) => {
      this.setState({ events: res.data });
    });
  };

  render() {
    const { events } = this.state;
    if (events) {
      events.forEach((event) => {});
    }
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
            {events ? <EventList events={events} /> : null}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Event;

import React, { Component } from "react";
import { Row, Col, Jumbotron, Button, Badge } from "reactstrap";
import Navigator from "../../component/Nevigator";
import EventList from "../../component/RunningEvent/EventList";
import API from "../../API/API";
import EventUserStatus from "../RunningEventPage/EventUserStatus";
class Event extends Component {
  state = {
    events: null,
    userId: "",
    eventStatus: false,
  };
  handelClick = () => {
    this.props.history.push("/create-event");
  };
  componentDidMount = async () => {
    const Key = new FormData();
    Key.append("token", localStorage.getItem("key"));
    await API.post("/auth-token", Key).then((res) => {
      if (res.data.userId) {
        this.setState({
          userId: res.data.userId,
        });
      }
    });
    API.get("/event").then((res) => {
      this.setState({ events: res.data });
    });
  };
  handelClickStatus = () => {
    this.setState({ eventStatus: !this.state.eventStatus });
  };

  render() {
    const { events } = this.state;
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
              <h6>Event Status : </h6>
              {this.state.userId && this.state.eventStatus ? <EventUserStatus userId={this.state.userId} /> : null}
              <Button onClick={this.handelClickStatus}>Check Status</Button>
              <Button className="ml-2" onClick={this.handelClick}>
                Create Event
              </Button>
            </Jumbotron>
            {events ? <EventList events={events} /> : null}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Event;

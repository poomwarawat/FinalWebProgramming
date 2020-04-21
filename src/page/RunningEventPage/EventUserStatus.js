import React, { Component } from "react";
import { Row, Col, Jumbotron, Button, Badge } from "reactstrap";
import StatusList from "../RunningEventPage/StatusList";
import API from "../../API/API";
export default class EventUserStatus extends Component {
  state = {
    userId: this.props.userId,
    eventData: null,
  };
  componentDidMount = () => {
    let url = "/event-status/" + this.state.userId;
    API.get(url).then((res) => {
      this.setState({ eventData: res.data });
    });
  };
  render() {
    let { eventData } = this.state;

    return <div>{eventData ? <StatusList eventData={eventData} /> : null}</div>;
  }
}

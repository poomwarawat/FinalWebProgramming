import React, { Component } from "react";
import API from "../../API/API";
import { Container, Row, Col, Button } from "reactstrap";
import Navigator from "../../component/Nevigator";
import DetailsSummary from "../RunningEventPage/DetailsSummary";
export default class DetailEventPage extends Component {
  state = {
    eventId: this.props.match.params.id,
    eventData: null,
  };
  componentDidMount = async () => {
    let url = "/event/" + this.state.eventId;
    await API.get(url).then((res) => {
      this.setState({ eventData: res.data });
    });
  };

  render() {
    const { eventData } = this.state;
    return (
      <div>
        <Row>
          <Col md={3}>
            <Navigator />
          </Col>
          <Col md={7}>{this.state.eventData ? <DetailsSummary eventData={this.state.eventData} /> : null}</Col>
        </Row>
      </div>
    );
  }
}

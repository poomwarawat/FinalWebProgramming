import React, { Component } from "react";
import API from "../../API/API";
import { Container, Row, Col, Button } from "reactstrap";
import Navigator from "../../component/Nevigator";
import DetailsSummary from "../RunningEventPage/DetailsSummary";
export default class DetailEventPage extends Component {
  state = {
    eventId: this.props.match.params.id,
    eventData: null,
    userId: null,
  };
  componentDidMount = async () => {
    let url = "/event/" + this.state.eventId;
    const Key = new FormData();
    Key.append("token", localStorage.getItem("key"));
    API.post("/auth-token", Key).then((res) => {
      if (res.data.userId) {
        this.setState({
          userId: res.data.userId,
        });
      }
    });

    await API.get(url).then((res) => {
      this.setState({ eventData: res.data });
    });
    await API.get();
  };

  render() {
    const { eventData } = this.state;
    return (
      <div>
        <Row>
          <Col md={3}>
            <Navigator />
          </Col>
          <Col md={7}>
            {this.state.eventData && this.state.userId ? (
              <DetailsSummary eventData={this.state.eventData} userId={this.state.userId} />
            ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}

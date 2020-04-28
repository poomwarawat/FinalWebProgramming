import React, { Component } from "react";
import { Container, Row, Col, Button, Alert } from "reactstrap";
import API from "../../API/API";
import PaymentModal from "../RunningEventPage/PaymentModal";
import PaymentCheck from "../RunningEventPage/PaymentCheck";
export default class DetailsSummary extends Component {
  state = {
    userId: this.props.userId,
    eventId: this.props.eventData[0]["eventId"],
    name: this.props.name,
    funrunSelected: false,
    miniSelected: false,
    halfSelected: false,
    marathonSelected: false,
    categorySelected: null,
    registered: false,
    paymentState: false,
    buttonRegisterState: false,
    bibNumber: "",
  };

  handelClick = (e) => {
    this.setState({ categorySelected: e.target.id });
  };

  componentWillMount = () => {
    let data = new FormData();
    let eventId = this.state.eventId;
    let userId = this.state.userId;
    data.append("userId", userId);
    data.append("eventId", eventId);
    API.post("/event-status", data).then((res) => {
      if (res.data.length > 0) {
        this.setState({
          paymentState: res.data[0]["paymentState"],
          registered: !this.state.registered,
          buttonRegisterState: true,
        });
        if (res.data[0].paymentState === 2) {
          API.post("/event-bib", data).then((res) => {
            this.setState({ bibNumber: res.data[0]["bib_number"] });
          });
        }
      }
    });
  };
  componentDidMount = () => {};

  handelClickCheckout = async () => {
    let userIdAndEventID = new FormData();
    userIdAndEventID.append("userId", this.state.userId);
    userIdAndEventID.append("eventId", this.state.eventId);
    userIdAndEventID.append("category", this.state.categorySelected);
    await API.post("/event-checkout", userIdAndEventID).then((res) => {
      console.log(res.status);
    });
  };

  render() {
    const { eventData } = this.props;
    console.log("DetailsSummary -> render -> eventData", eventData);
    let eventDate = eventData[0]["event_date"].split("T", 1);
    let startDate = eventData[0]["start_date"].split("T", 1);
    let endDate = eventData[0]["end_date"].split("T", 1);
    return (
      <div>
        <Container>
          <Row>
            <Col md="8">
              <div className="shadow-sm p-3 mb-5 bg-white rounded mt-4">
                <p className="mt-0 mb-0 b-title-text">{eventData[0]["title"]}</p>
                <p className="mt-0 mb-0 ">Location : {eventData[0]["address"]}</p>
                <p className="mt-0 mb-0 ">Organized By : {eventData[0]["organized_by"]}</p>
              </div>
              <div className="shadow-sm p-3 mb-5 bg-white rounded mt-4">
                <h5 className="display-5 b-title-text">Categories</h5>
                <p className="mt-0 mb-0 b-sub-text-2 text-warning">You can register only one category.</p>
                <hr />
                <div>
                  {eventData[0]["funrun_price"] >= 0 ? (
                    <Row className="align-items-center mb-2">
                      <Col md="6" className="b-sub-text-2">
                        Fun Run (5K)
                      </Col>
                      <Col md="3" className="text-centet b-price-text">
                        {eventData[0]["funrun_price"]} THB
                      </Col>
                      <Col md="2">
                        <Button color="primary" size="sm" onClick={this.handelClick} disabled={this.state.buttonRegisterState} id="funrun">
                          Register
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                  {eventData[0]["mini_price"] >= 0 ? (
                    <Row className="align-items-center mb-2">
                      <Col md="6" className="b-sub-text-2">
                        Mini Mathon Run (10K)
                      </Col>
                      <Col md="3" className="text-centet b-price-text">
                        {eventData[0]["mini_price"]} THB
                      </Col>
                      <Col md="2">
                        <Button color="primary" size="sm" onClick={this.handelClick} disabled={this.state.buttonRegisterState} id="minimarathon">
                          Register
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                  {eventData[0]["half_price"] >= 0 ? (
                    <Row className="align-items-center mb-2">
                      <Col md="6" className="b-sub-text-2">
                        Half Mathon Run (21K)
                      </Col>
                      <Col md="3" className="text-centet b-price-text">
                        {eventData[0]["half_price"]} THB
                      </Col>
                      <Col md="2">
                        <Button color="primary" size="sm" onClick={this.handelClick} disabled={this.state.buttonRegisterState} id="halfmarathon">
                          Register
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                  {eventData[0]["marathon_price"] >= 0 ? (
                    <Row className="align-items-center mb-2">
                      <Col md="6" className="b-sub-text-2">
                        Marathon (42K)
                      </Col>
                      <Col md="3" className="text-centet b-price-text">
                        {eventData[0]["marathon_price"]} THB
                      </Col>
                      <Col md="2">
                        <Button color="primary" size="sm" onClick={this.handelClick} disabled={this.state.buttonRegisterState} id="marathon">
                          Register
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                  {this.state.categorySelected === "funrun" ? (
                    <p className="text-success">You choose : Fun Run (5K) {eventData[0]["funrun_price"]} THB</p>
                  ) : null}
                  {this.state.categorySelected === "minimarathon" ? (
                    <p className="text-success">You choose : Mini Mathon Run (10K) {eventData[0]["mini_price"]} THB</p>
                  ) : null}
                  {this.state.categorySelected === "halfmarathon" ? (
                    <p className="text-success">You choose : Half Marathon Run (21K) {eventData[0]["half_price"]} THB</p>
                  ) : null}
                  {this.state.categorySelected === "marathon" ? (
                    <p className="text-success">You choose : Marathon Run (21K) {eventData[0]["marathon_price"]} THB</p>
                  ) : null}
                </div>
              </div>
              <div className="shadow-sm p-3 mb-5 bg-white rounded mt-4">
                <h5 className="display-5 b-title-text">About This Event</h5>
                <hr />
                <p className="mb-0 b-sub-text-2">Event Date : {eventDate}</p>
                <p className="mb-0 b-sub-text-2">
                  Register Date : {startDate} - {endDate}
                </p>

                <p className="mb-0 b-sub-text-2">Organize By : {eventData[0]["organized_by"]}</p>
                <hr />
                <p>{eventData[0]["description"]}</p>
              </div>
            </Col>
            <Col md="4">
              <div className="shadow-sm p-3 mb-0 bg-white rounded mt-4">
                <h5 className="display-5 b-title-text">Entry Fee</h5>
                <hr />

                <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                  Runner : <span className="b-checkout-data">{this.state.name}</span>
                </p>
                {this.state.registered ? (
                  <p>
                    You have already applied to participate in this running event, please report the money transfer on the webpage and awaiting verification.
                  </p>
                ) : (
                  <div>
                    {" "}
                    <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                      Categories : <span className="b-checkout-data">{this.state.categorySelected}</span>
                    </p>
                    <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                      Entry Fee : {this.state.categorySelected === "funrun" ? <span className="text-success">{eventData[0]["funrun_price"]} THB</span> : null}
                      {this.state.categorySelected === "minimarathon" ? <span className="text-success">{eventData[0]["mini_price"]} THB</span> : null}
                      {this.state.categorySelected === "halfmarathon" ? <span className="text-success">{eventData[0]["half_price"]} THB</span> : null}
                      {this.state.categorySelected === "marathon" ? <span className="text-success">{eventData[0]["marathon_price"]} THB</span> : null}
                    </p>
                  </div>
                )}
              </div>
              <div>{this.state.categorySelected ? <PaymentModal event={eventData} eventData={this.state} /> : null}</div>
              {this.state.registered && this.state.paymentState == 1 ? (
                <Alert color="warning" className="text-center">
                  pending
                </Alert>
              ) : null}
              {this.state.registered && this.state.paymentState == 2 ? (
                <Alert color="success" className="text-center">
                  Welcome to runrena :<h1>BIB</h1> <h1>- {this.state.bibNumber} -</h1>
                </Alert>
              ) : null}
              {this.state.registered && this.state.paymentState == 3 ? (
                <Alert color="danger" className="text-center">
                  Incorrect, report the money transfer.
                </Alert>
              ) : null}
              {(this.state.registered && this.state.paymentState == 0) || this.state.paymentState == 3 ? (
                <PaymentCheck userId={this.state.userId} eventId={this.state.eventId} />
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

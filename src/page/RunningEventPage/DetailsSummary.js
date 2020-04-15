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

export default class DetailsSummary extends Component {
  state = {
    userId: this.props.userId,
    funrunSelected: false,
    miniSelected: false,
    halfSelected: false,
    marathonSelected: false,
    categorySelected: null,
  };
  handelClick = (e) => {
    this.setState({ categorySelected: e.target.id });
  };

  render() {
    const { eventData } = this.props;
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
                      <Col md="7" className="b-sub-text-2">
                        Fun Run (5K)
                      </Col>
                      <Col md="2" className="text-centet b-price-text">
                        {eventData[0]["funrun_price"]} THB
                      </Col>
                      <Col md="2">
                        <Button
                          color="primary"
                          size="sm"
                          onClick={this.handelClick}
                          disabled={this.state.funrunSelected}
                          id="funrun"
                        >
                          Register
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                  {eventData[0]["mini_price"] >= 0 ? (
                    <Row className="align-items-center mb-2">
                      <Col md="7" className="b-sub-text-2">
                        Mini Mathon Run (10K)
                      </Col>
                      <Col md="2" className="text-centet b-price-text">
                        {eventData[0]["mini_price"]} THB
                      </Col>
                      <Col md="2">
                        <Button
                          color="primary"
                          size="sm"
                          onClick={this.handelClick}
                          disabled={this.state.miniSelected}
                          id="minimarathon"
                        >
                          Register
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                  {eventData[0]["half_price"] >= 0 ? (
                    <Row className="align-items-center mb-2">
                      <Col md="7" className="b-sub-text-2">
                        Half Mathon Run (21K)
                      </Col>
                      <Col md="2" className="text-centet b-price-text">
                        {eventData[0]["half_price"]} THB
                      </Col>
                      <Col md="2">
                        <Button
                          color="primary"
                          size="sm"
                          onClick={this.handelClick}
                          disabled={this.state.halfButton}
                          id="halfmarathon"
                        >
                          Register
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                  {eventData[0]["marathon_price"] >= 0 ? (
                    <Row className="align-items-center mb-2">
                      <Col md="7" className="b-sub-text-2">
                        Marathon (42K)
                      </Col>
                      <Col md="2" className="text-centet b-price-text">
                        300 THB
                      </Col>
                      <Col md="2">
                        <Button
                          color="primary"
                          size="sm"
                          onClick={this.handelClick}
                          disabled={this.state.marathonSelected}
                          id="marathon"
                        >
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
                    <p className="text-success">
                      You choose : Half Marathon Run (21K) {eventData[0]["half_price"]} THB
                    </p>
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
                  Runner : <span className="b-checkout-data">Anuwat Sukthong</span>
                </p>
                <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                  Categories : <span className="b-checkout-data">Fun Run (5K)</span>
                </p>
                <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                  Entry Fee : <span className="b-checkout-data-price">30$</span>
                </p>
              </div>
              <div>
                <Button className="ml-auto btn-block">Checkout</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

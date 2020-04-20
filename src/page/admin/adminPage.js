import React, { Component } from "react";
import { Row, Col, Nav, Card, Badge, CardHeader, CardBody, Button, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import Nevigator from "../../component/Nevigator";
import API from "../../API/API";
export default class adminPage extends Component {
  state = {
    earning: null,
    monthEvent: null,
    participants: null,
    successPayment: null,
    pendingPayment: null,
    incorrectPayment: null,
    paymentData: null,
  };
  componentWillMount = () => {
    API.get("/earning_daily").then((res) => {
      this.setState({ earning: res.data[0]["SUM(payment_amount)"] });
    });
    API.get("/event-month").then((res) => {
      this.setState({ monthEvent: res.data[0]["COUNT(eventId)"] });
    });
    API.get("/participants").then((res) => {
      this.setState({ participants: res.data[0]["COUNT (DISTINCT userId)"] });
    });
    API.get("/event-checkout").then((res) => {
      console.log("adminPage -> componentWillMount -> res", res.data);
      let success = 0;
      let pending = 0;
      let incorrect = 0;
      res.data.forEach((payment) => {
        let data = Object.values(payment);
        if (data[1] == 1) {
          pending = data[0];
        } else if (data[1] == 2) {
          success = data[0];
        } else if (data[1] == 3) {
          incorrect = data[0];
        }
      });
      this.setState({ paymentData: { success, pending, incorrect } });
    });
  };
  render() {
    return (
      <div>
        <Row>
          <Col md="3">
            <Nevigator />
          </Col>
          <Col md="8">
            <Row>
              <Col md="12">
                <div className="shadow-sm p-3 mb-5 bg-white rounded mt-4 text-center">
                  <p className="mt-0 mb-0 b-title-text">Runrena Admin</p>
                </div>
              </Col>
              <Col md="4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          EARNINGS (DAILY)
                        </div>
                        {this.state.earning ? (
                          <div className="h5 mb-0 font-weight-bold text-gray-800">THB {this.state.earning}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          THIS MONTH EVENT
                        </div>
                        {this.state.monthEvent ? (
                          <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.monthEvent} events</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">participants</div>
                        {this.state.participants ? (
                          <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.participants}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="4" className="mt-4">
                <Card>
                  <CardHeader>Payment Management</CardHeader>
                  <CardImg
                    top
                    width="100%"
                    src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="Card image cap"
                  />
                  <CardBody>
                    {this.state.paymentData ? (
                      <h6>
                        <Badge color="success" className="mr-1">
                          success
                        </Badge>{" "}
                        :
                        <Badge color="success" className="ml-1">
                          {this.state.paymentData["success"]}
                        </Badge>
                      </h6>
                    ) : null}
                    {this.state.paymentData ? (
                      <h6>
                        <Badge color="warning" className="mr-1">
                          pending
                        </Badge>{" "}
                        :
                        <Badge color="warning" className="ml-1">
                          {this.state.paymentData["pending"]}
                        </Badge>
                      </h6>
                    ) : null}
                    {this.state.paymentData ? (
                      <h6>
                        <Badge color="danger" className="mr-1">
                          incorrect
                        </Badge>{" "}
                        :
                        <Badge color="danger" className="ml-1">
                          {this.state.paymentData["incorrect"]}
                        </Badge>
                      </h6>
                    ) : null}

                    <Link to="/payment">
                      <Button size="sm" className="right btn-block">
                        Manage
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="mt-4">
                <Card>
                  <CardHeader>Event Management</CardHeader>
                  <CardImg
                    top
                    width="100%"
                    src="https://images.unsplash.com/photo-1547483238-f400e65ccd56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <h6>
                      <Badge color="success">success</Badge> : <Badge color="success">44</Badge>
                    </h6>
                    <h6>
                      <Badge color="warning">pending</Badge> : <Badge color="warning">10</Badge>
                    </h6>
                    <h6>
                      <Badge color="danger">incorrect</Badge> : <Badge color="danger">10</Badge>
                    </h6>
                    <Link to="/event-management">
                      <Button size="sm" className="right btn-block">
                        Manage
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Row, Col, Nav, Card, Badge, CardHeader, CardBody, Button, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import Nevigator from "../../component/Nevigator";
import API from "../../API/API";
import EventList from "../admin/EventList";
export default class EventManagement extends Component {
  state = {
    eventData: null,
  };
  componentWillMount = () => {
    API.get("/event").then((res) => {
      this.setState({ eventData: res.data });
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
                <div className="shadow-sm p-3 mb-2 bg-white rounded mt-4 text-center">
                  <p className="mt-0 mb-0 b-title-text">Runrena Admin</p>
                </div>
              </Col>
              <Col md="12">
                {" "}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Event</h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="text-center">
                          <tr>
                            <th>Id</th>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Manage</th>
                          </tr>
                        </thead>
                        {this.state.eventData ? <EventList eventData={this.state.eventData} /> : null}
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

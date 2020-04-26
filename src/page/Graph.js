import React, { Component } from "react";
import Nevigator from "../component/Nevigator";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, Row, Col, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Bar } from "react-chartjs-2";
import MonthReport from "../component/Graph/MonthReport";
import API from "../API/API";
export default class Explorer extends Component {
  state = {
    userId: null,
  };
  componentDidMount = () => {
    const Key = new FormData();
    Key.append("token", localStorage.getItem("key"));
    API.post("/auth-token", Key).then((res) => {
      if (res.data.userId) {
        this.setState({
          userId: res.data.userId,
        });
      }
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
            <Card>
              <CardHeader>Overview</CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <CardTitle>
                      <div>Month Report</div>
                    </CardTitle>
                  </Col>
                  <Col md="12">{this.state.userId ? <MonthReport userId={this.state.userId} /> : null}</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

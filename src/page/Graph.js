import React, { Component } from "react";
import Nevigator from "../component/Nevigator";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, Row, Col, CardHeader, CardBody, CardTitle } from "reactstrap";
import { Bar } from "react-chartjs-2";

export default class Explorer extends Component {
  render() {
    const data = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Beat",
          backgroundColor: [
            "#4d4c7d",
            "#fb7b6b",
            "#d7385e",
            "#4d4c7d",
            "#fb7b6b",
            "#d7385e",
            "#4d4c7d",
            "#fb7b6b",
            "#d7385e",
          ],
          highlightFill: "yellow",
          borderColor: "white",
          borderWidth: 2,
          barPercentage: 0.4,
          data: ["20", "30", "40", "20", "30", "40", "20", "30", "40"],
        },
      ],
    };
    return (
      <div>
        <Row>
          <Col md="3">
            <Nevigator />
          </Col>
          <Col md="9">
            <Card>
              <CardHeader>Overview</CardHeader>
              <CardBody>
                <Row>
                  <Col md="12">
                    <CardTitle>
                      <div>Week Report</div>
                    </CardTitle>
                  </Col>
                  <Col md="4">
                    <Bar
                      data={data}
                      width={10}
                      height={300}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
                        },
                        tooltips: {
                          displayColors: false,
                          titleFontSize: 16,
                          bodyFontSize: 14,
                          xPadding: 10,
                          yPadding: 10,
                          callbacks: {
                            label: (tooltipItem, data) => {
                              return `${tooltipItem.value} Km`;
                            },
                          },
                        },
                      }}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

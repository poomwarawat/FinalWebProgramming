import React, { Component } from "react";
import Nevigator from "../../component/Nevigator";
import { Row, Col } from "reactstrap";
import API from "../../API/API";
import EventListReport from "../admin/EventListReport";
import ReportPdf from "../admin/ReportPdf";
import { Button } from "reactstrap";

export default class EventReport extends Component {
  state = {
    eventId: this.props.match.params.id,
    eventReportData: null,
    eventData: null,
    participantCount: 0,
    deleteButton: false,
  };
  componentDidMount = () => {
    let url = "/event-report/" + this.state.eventId;
    let urlEvent = "/event/" + this.state.eventId;
    let urlEventParticipant = "/participant/" + this.state.eventId;
    API.get(url).then((res) => {
      this.setState({ eventReportData: res.data });
    });
    API.get(urlEvent).then((res) => {
      this.setState({ eventData: res.data });
    });
    API.get(urlEventParticipant).then((res) => {
      this.setState({ participantCount: res.data });
    });
  };
  handelClick = () => {
    console.log("click");
    this.setState({ deleteButton: !this.state.deleteButton });
  };

  handelDeleteEvent = () => {
    console.log("event deletes");
    let url = "/event-delete/" + this.state.eventId;
    API.get(url).then((res) => {
      console.log("delete done");
      this.props.history.push("/event-management");
    });
  };
  render() {
    const { eventData } = this.state;
    let participant = null;
    if (this.state.participantCount) {
      participant = this.state.participantCount[0]["COUNT(bib_number)"];
    }

    return (
      <div>
        <Row>
          <Col md="3">
            <Nevigator />
          </Col>
          <Col md="8">
            <Row>
              <Col md="12"></Col>
              <Col md="12">
                <div className="shadow-sm p-3 mb-2 bg-white rounded mt-4 text-center">
                  <p className="mt-0 mb-0 b-title-text">Runrena Admin</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6" className="pr-0">
                <div className="card border-left-warning shadow h-100 ">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        {eventData ? <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{eventData[0]["title"]}</div> : null}
                        {eventData ? (
                          <div className="mb-0 font-weight-bold text-gray-800 ">
                            <p>Date : {eventData[0]["event_date"].slice(0, 10)}</p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="card border-left-warning shadow h-100">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <h5 className="text-center">Participant</h5>
                        {participant ? <h3 className="text-center">{participant}</h3> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="card border-left-warning shadow h-100">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">{this.state.eventId ? <ReportPdf eventId={this.state.eventId} /> : null}</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                {" "}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <div>
                      <Row className="align-items-center">
                        <Col md="9">Participant</Col>
                        <Col md="2">
                          {this.state.deleteButton ? (
                            <Button size="sm" className="float-right" onClick={this.handelDeleteEvent}>
                              Delete Event
                            </Button>
                          ) : null}
                        </Col>
                        <Col md="1">
                          <div>
                            <i className="far fa-trash-alt icon-delete" onClick={this.handelClick}></i>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="text-center">
                          <tr>
                            <th>BIB</th>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        {this.state.eventReportData ? <EventListReport eventData={this.state.eventReportData} /> : null}
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

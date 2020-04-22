import React, { Component } from "react";
import { saveAs } from "file-saver";
import API from "../../API/API";
import { Spinner, Button } from "reactstrap";
export default class ReportPdf extends Component {
  state = {
    eventId: this.props.eventId,
    loaded: false,
  };
  createAndDownloadPdf = () => {
    this.setState({ loaded: !this.state.loaded });
    let data = new FormData();
    data.append("eventId", this.state.eventId);
    API.post("/create-pdf", data)
      .then(() => API.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "runrenaReport.pdf");
        this.setState({ loaded: !this.state.loaded });
      });
  };
  render() {
    let { eventId } = this.state;
    console.log("ReportPdf -> render -> eventData", eventId);
    return (
      <div>
        <Button onClick={this.createAndDownloadPdf} className="btn-block">
          Download PDF
        </Button>
        <div className="text-center mt-2">
          {this.state.loaded ? (
            <div>
              <Spinner type="grow" color="primary" />
              <Spinner type="grow" color="secondary" />
              <Spinner type="grow" color="success" />
              <Spinner type="grow" color="danger" />
              <Spinner type="grow" color="warning" />
              <Spinner type="grow" color="info" />
              <Spinner type="grow" color="light" />
              <Spinner type="grow" color="dark" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

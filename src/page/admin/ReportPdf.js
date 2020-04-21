import React, { Component } from "react";
import { saveAs } from "file-saver";
import API from "../../API/API";
export default class ReportPdf extends Component {
  state = {
    eventId: this.props.eventId,
  };
  createAndDownloadPdf = () => {
    let data = new FormData();
    data.append("eventId", this.state.eventId);
    API.post("/create-pdf", data)
      .then(() => API.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "runrenaReport.pdf");
      });
  };
  render() {
    let { eventId } = this.state;
    console.log("ReportPdf -> render -> eventData", eventId);
    return (
      <div>
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

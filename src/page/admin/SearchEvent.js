import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import API from "../../API/API";
export default class SearchEvent extends Component {
  state = {
    eventDataFilter: null,
  };
  handelOnChange = (e) => {
    let data = new FormData();
    data.append("data", e.target.value);
    API.post("/event-search", data).then((res) => {
      this.props.handelSearch(res.data);
    });
  };

  render() {
    return (
      <div>
        <InputGroup>
          <Input placeholder="event name" onChange={this.handelOnChange} />
          <InputGroupAddon addonType="append">
            <InputGroupText>Search</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

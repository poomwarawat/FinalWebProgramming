import React, { Component } from "react";
import Navigator from "../../component/Nevigator";
import FadeWarning from "../RunningEventPage/FadeWarning";
import API from "../../API/API";
import {
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  CustomInput,
} from "reactstrap";
export default class CreateEvent extends Component {
  state = {
    name: "",
    funrun: false,
    mini: false,
    half: false,
    marathon: false,
    funrunPrice: -1,
    miniPrice: -1,
    halfPrice: -1,
    marathonPrice: -1,
    startDate: "",
    endDate: "",
    description: "",
    address: "",
    organized_by: "",
    event_date: "",
    created_event: false,
  };

  handelChange = (e) => {
    if (e.target.id === "5K") {
      this.setState({ funrun: !this.state.funrun });
    } else if (e.target.id === "10K") {
      this.setState({ mini: !this.state.mini });
    } else if (e.target.id === "21K") {
      this.setState({ half: !this.state.half });
    } else if (e.target.id === "42K") {
      this.setState({ marathon: !this.state.marathon });
    } else {
      this.setState({ [e.target.id]: e.target.value });
    }
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("name", this.state.name);
    Data.append("description", this.state.description);
    Data.append("startDate", this.state.startDate);
    Data.append("endDate", this.state.endDate);
    Data.append("event_date", this.state.event_date);
    Data.append("imageUrl", "");
    Data.append("funRunPrice", this.state.funrunPrice);
    Data.append("halfMarathonPrice", this.state.halfPrice);
    Data.append("miniMarathonPrice", this.state.miniPrice);
    Data.append("marathonPrice", this.state.marathonPrice);
    Data.append("address", this.state.address);
    Data.append("organized_by", this.state.organized_by);
    API.post("/event", Data).then((res) => {
      if (res.status === 200) {
        console.log("CreateEvent -> handelSubmit -> res.status", res.status);
        this.setState({ created_event: true });
        window.location.reload();
      }
    });
  };
  render() {
    const { funrun, mini, half, marathon } = this.state;
    return (
      <div>
        <Row>
          <Col md={3}>
            <Navigator />
          </Col>
          <Col md={8}>
            <Jumbotron className="mb-0">
              <h1 className="display-5">Create Events</h1>
              <hr className="my-2" />
            </Jumbotron>
            <Card className="mb-5">
              <CardHeader>Form</CardHeader>
              <CardBody>
                <Form onSubmit={this.handelSubmit} id="create-course-form">
                  <FormGroup row>
                    <Label for="name" sm={1}>
                      Name
                    </Label>
                    <Col sm={11}>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Run for fight covid-19"
                        onChange={this.handelChange}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label for="distance">Distance</Label>
                    <CustomInput type="checkbox" id="5K" value="5K" label="Fun Run" onChange={this.handelChange} />
                    <CustomInput
                      type="checkbox"
                      id="10K"
                      value="10K"
                      label="Mini Marathon"
                      onChange={this.handelChange}
                    />
                    <CustomInput
                      type="checkbox"
                      value="21K"
                      id="21K"
                      label="Half Marathon"
                      onChange={this.handelChange}
                    />
                    <CustomInput type="checkbox" value="42K" id="42K" label="Marathon" onChange={this.handelChange} />
                  </FormGroup>
                  <FormGroup row>
                    {funrun ? (
                      <Col md={3}>
                        <Label for="price">Fun Run Price</Label>
                        <Input
                          type="number"
                          name="price"
                          id="funrunPrice"
                          placeholder="500 THB"
                          onChange={this.handelChange}
                          required
                        />
                      </Col>
                    ) : null}
                    {mini ? (
                      <Col md={3}>
                        <Label for="price">Mini Marathon Price</Label>
                        <Input
                          type="number"
                          name="price"
                          id="miniPrice"
                          placeholder="500 THB"
                          onChange={this.handelChange}
                          required
                        />
                      </Col>
                    ) : null}
                    {half ? (
                      <Col md={3}>
                        <Label for="price">Half Marathon Price</Label>
                        <Input
                          type="number"
                          name="price"
                          id="halfPrice"
                          placeholder="500 THB"
                          onChange={this.handelChange}
                          required
                        />
                      </Col>
                    ) : null}
                    {marathon ? (
                      <Col md={3}>
                        <Label for="price">Marathon Price</Label>
                        <Input
                          type="number"
                          name="price"
                          id="marathonPrice"
                          placeholder="500 THB"
                          onChange={this.handelChange}
                          required
                        />
                      </Col>
                    ) : null}
                  </FormGroup>
                  <FormGroup row>
                    <Col md={4}>
                      <Label for="startDate">Start Date Register</Label>
                      <Input type="date" name="startDate" id="startDate" onChange={this.handelChange} required />
                    </Col>
                    <Col md={4}>
                      <Label for="endDate">End Date Register</Label>
                      <Input type="date" name="endDate" id="endDate" onChange={this.handelChange} required />
                    </Col>
                    <Col md={4}>
                      <Label for="event_date">Event Date</Label>
                      <Input type="date" name="eventdate" id="event_date" onChange={this.handelChange} required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="6">
                      <Label for="address">Address</Label>
                      <Input
                        type="textarea"
                        name="address"
                        id="address"
                        rows="2"
                        onChange={this.handelChange}
                        required
                      />
                    </Col>
                    <Col md="6">
                      <Label for="address">Organized By</Label>
                      <Input
                        type="textarea"
                        name="address"
                        id="organized_by"
                        rows="2"
                        onChange={this.handelChange}
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      rows="4"
                      onChange={this.handelChange}
                      required
                    />
                  </FormGroup>
                  <Button className="btn-block">Submit</Button>
                  {this.state.created_event ? <FadeWarning /> : null}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

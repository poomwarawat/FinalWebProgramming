import React, { Component } from "react";
import Navigator from "../../component/Nevigator";
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
    funrunPrice: 0,
    miniPrice: 0,
    halfPrice: 0,
    marathonPrice: 0,
    startDate: "",
    endDate: "",
    description: "",
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
    Data.append("startDate", this.state.startDate);
    Data.append("endDate", this.state.endDate);
    Data.append("description", this.state.description);
    if (this.state.funrun) {
      Data.append("funRunPrice", this.state.funrunPrice);
    }
    if (this.state.mini) {
      Data.append("miniMarathonPrice", this.state.miniPrice);
    }
    if (this.state.half) {
      Data.append("halfMarathonPrice", this.state.halfPrice);
    }
    if (this.state.marathon) {
      Data.append("marathonPrice", this.state.marathonPrice);
    }
    API.post("/event", Data).then((res) => {});
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
                <Form onSubmit={this.handelSubmit}>
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
                        />
                      </Col>
                    ) : null}
                  </FormGroup>
                  <FormGroup row>
                    <Col md={4}>
                      <Label for="startDate">Start Date Register</Label>
                      <Input type="date" name="startDate" id="startDate" onChange={this.handelChange} />
                    </Col>
                    <Col md={4}>
                      <Label for="endDate">End Date Register</Label>
                      <Input type="date" name="endDate" id="endDate" onChange={this.handelChange} />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" rows="6" onChange={this.handelChange} />
                  </FormGroup>
                  <Button className="btn-block">Submit</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

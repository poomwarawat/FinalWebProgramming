import React, { Component } from "react";
import Navigator from "../component/Nevigator";
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
  render() {
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
            <Card>
              <CardHeader>Form</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={1}>
                      Name
                    </Label>
                    <Col sm={11}>
                      <Input type="text" name="email" id="exampleEmail" placeholder="Run for fight covid-19" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleCheckbox">Distance</Label>
                    <CustomInput type="checkbox" id="fun_run" label="Fun Run" />
                    <CustomInput type="checkbox" id="mini_marathon" label="Mini Marathon" />
                    <CustomInput type="checkbox" id="marathon" label="Marathon" />
                  </FormGroup>
                  <FormGroup row>
                    <Col md={4}>
                      <Label for="price">Fun Run Price</Label>
                      <Input type="number" name="price" id="price" placeholder="500 THB" />
                    </Col>
                    <Col md={4}>
                      <Label for="price">Mini Marathon Price</Label>
                      <Input type="number" name="price" id="price" placeholder="500 THB" />
                    </Col>
                    <Col md={4}>
                      <Label for="price">Marathon Price</Label>
                      <Input type="number" name="price" id="price" placeholder="500 THB" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="description" id="description" />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

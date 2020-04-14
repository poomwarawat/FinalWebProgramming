import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardFooter,
  CardTitle,
  CardHeader,
} from "reactstrap";
import Navigator from "../../component/Nevigator";
export default class DetailEventPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={3}>
            <Navigator />
          </Col>
          <Col md={8}>
            <Container>
              <Row>
                <Col md="7">
                  <div class="shadow-sm p-3 mb-5 bg-white rounded mt-4">
                    <h5 className="display-5 b-title-text">2020 Cinco De Mayo Virtual 5K Run</h5>
                    <p className="mt-0 mb-0 b-sub-text-1">May 05, 2020</p>
                    <p className="mt-0 mb-0 b-sub-text-1">From Home • 12345 My Home Your City, MD 21046</p>
                    <p className="mt-0 mb-0 b-sub-text-1">Organized by Rip It Events</p>
                  </div>
                  <div class="shadow-sm p-3 mb-5 bg-white rounded mt-4">
                    <h5 className="display-5 b-title-text">Categories</h5>
                    <hr />
                    <div>
                      <Row className="align-items-center mb-2">
                        <Col md="7" className="b-sub-text-2">
                          Fun Run (5K)
                        </Col>
                        <Col md="2" className="text-centet b-price-text">
                          30 $
                        </Col>
                        <Col md="2">
                          <Button color="primary" size="sm">
                            Register
                          </Button>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col md="7" className="b-sub-text-2">
                          Mini Mathon Run (10K)
                        </Col>
                        <Col md="2" className="text-centet b-price-text">
                          300 $
                        </Col>
                        <Col md="2">
                          <Button color="primary" size="sm">
                            Register
                          </Button>
                        </Col>
                      </Row>
                      <Row className="align-items-center mb-2">
                        <Col md="7" className="b-sub-text-2">
                          Marathon (42K)
                        </Col>
                        <Col md="2" className="text-centet b-price-text">
                          300 $
                        </Col>
                        <Col md="2">
                          <Button color="primary" size="sm">
                            Register
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div class="shadow-sm p-3 mb-5 bg-white rounded mt-4">
                    <h5 className="display-5 b-title-text">About This Event</h5>
                    <hr />
                    <p class="mb-0 b-sub-text-2">May 05, 2020 Tuesday</p>
                    <p class="mb-0 b-sub-text-2">From Home 12345 My Home Your City, MD 21046</p>
                    <hr />
                    <p>
                      We want to inspire you to be POSITIVE and HEALTHY during this time of uncertainty. Join us on May
                      5 as we complete this run TOGETHER. This virtual 5k is a event that can be run (or walked) from
                      any location you choose. On the road, on a trail, on a treadmill - all while maintaining social
                      distancing. Run at your own pace and time it yourself. The race packet for this virtual run
                      includes a race shirt and a finisher’s medal. There are no awards for this run. Our hope is that
                      everyone will complete this run together on Tuesday, May 5 but you are welcome to complete your
                      run whenever it best fits your life. Join our virtual run facebook group and show your support for
                      your fellow runner . Be sure to post photos of your training and that you completed your 5K. ​
                    </p>
                  </div>
                </Col>
                <Col md="5">
                  <div class="shadow-sm p-3 mb-0 bg-white rounded mt-4">
                    <h5 className="display-5 b-title-text">Entry Fee</h5>
                    <hr />
                    <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                      Runner : <span className="b-checkout-data">Anuwat Sukthong</span>
                    </p>
                    <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                      Tel : <span className="b-checkout-data">0863975940</span>
                    </p>
                    <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                      Categories : <span className="b-checkout-data">Fun Run (5K)</span>
                    </p>
                    <p className="mt-0 mb-0 b-sub-text-1 b-checkout-title">
                      Entry Fee : <span className="b-checkout-data-price">30$</span>
                    </p>
                  </div>
                  <div>
                    <Button className="ml-auto btn-block">Checkout</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

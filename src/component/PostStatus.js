import React, { Component } from "react";
import API from "../API/API";
import UploadPost from "../component/UploadPost";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  CustomInput,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
export default class PostStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : '',
        date : new Date(),
        userId : '',
        description : '',
        totalDistance : '',
        paceAverage : '',
        email : this.props.email,
        post : []
    };
  }
  componentWillMount(){
    this.getPost()
}
    getPost = () =>{
        const URL = window.location.href
        var fullurl = URL,
        url = "/" + fullurl.split("/")[3];

        if(url === '/profile'){
            console.log("profile")
            const Key = new FormData()
            Key.append('token', localStorage.getItem('key') )
            API.post("/auth-token", Key)
            .then(res => {
                if(res.data.userId){
                    this.setState({
                        userId : res.data.userId
                    })
                }
                const userId = new FormData()
                userId.append('userId', this.state.userId)
                API.post("/post/get-post", userId)
                .then(res => {
                    this.setState({
                        post : this.state.post.concat(res.data)
                    })
                })
            })
        }else if(url === '/'){
            console.log("feed")
            const Key = new FormData()
            Key.append('token', localStorage.getItem('key') )
            API.post("/auth-token", Key)
            .then(res => {
                if(res.data.userId){
                    this.setState({
                        userId : res.data.userId
                    })
                }
                API.get('/post/get-all-post')
                .then(res => {
                    this.setState({
                        post : this.state.post.concat(res.data)
                    })
                })
            })
        }
    }
  handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleClick = () =>{
    const Data = new FormData()
    console.log(this.state)
    Data.append('data', this.state.data)
    Data.append('date', this.state.date)
    Data.append('userId', this.state.userId)
    Data.append('description', this.state.description)
    Data.append('totalDistance', this.state.totalDistance)
    Data.append('paceAverage', this.state.paceAverage)
    console.log(this.state)
    API.post("/post/posts", Data)
    .then(res => {
        if(res.data.post == true){
            alert("Post complete")
            this.setState({
                post : []
            })
            this.getPost()
        }
    })
}
  render() {
    return (
      <div>
        <div className="mt-4 container">
          <Card>
            <CardHeader id="test">Post</CardHeader>
            {/* <CardTitle>Update your today running status</CardTitle> */}
            <Form>
              <Row form className="ml-5 mr-5 mt-4">
                <Col md={4}>
                  <FormGroup>
                    <Label for="titleActivity">Title Activity</Label>
                    <Input
                      onChange={this.handleChange}
                      type="text"
                      name="data"
                      id="data"
                      placeholder="Bang Khun Running"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" onChange={this.handleChange} id="description" placeholder="Beat Yesterday" required />
                  </FormGroup>
                </Col>
              </Row>
              <Row form className="ml-5 mr-5">
                <Col md={4}>
                  <FormGroup>
                    <Label for="totalDistance">Distance</Label>
                    <Input type="number" name="totalDistance" onChange={this.handleChange} id="totalDistance" placeholder="30 KM" required />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="totalTime">Time</Label>
                    <Input type="number" name="totalTime" onChange={this.handleChange} id="totalTime" placeholder="15.00 Min" required />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="paceAverage">Pace</Label>
                    <Input type="number" name="paceAverage" onChange={this.handleChange} id="paceAverage" placeholder="4.05 Min/Km" required />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Card>
          <div className="head-post-box">
            <button className="btn btn-info w-100" onClick={this.handleClick}>
              POST
            </button>
          </div>
        </div>
        {this.state.post.reverse().map((datas) => {
          return (
            <div key={datas.postId}>
              <UploadPost data={datas}></UploadPost>
            </div>
          );
        })}
      </div>
    );
  }
}

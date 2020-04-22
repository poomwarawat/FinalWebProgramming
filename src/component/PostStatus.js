import React, { Component } from "react";
import API from "../API/API";
import UploadPost from "../component/UploadPost";
import { Progress } from 'reactstrap'
import firebase from 'firebase'
import 'react-image-lightbox/style.css'; 
import LazyLoad from 'react-lazy-load';

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
        totalTime : '',
        email : this.props.email,
        post : [],
        postPhoto : null,
        postPhotoUrl : null,
        uploadper : null,
    };
    var firebaseConfig = {
      apiKey: "AIzaSyCu36Uit6DfffqB7DiQjyHLhCmAI-s6pxI",
      authDomain: "runrena-db93f.firebaseapp.com",
      databaseURL: "https://runrena-db93f.firebaseio.com",
      projectId: "runrena-db93f",
      storageBucket: "runrena-db93f.appspot.com",
      messagingSenderId: "1084016282506",
      appId: "1:1084016282506:web:2ce25be1a4215f46f4d673"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
  }
  componentWillMount(){
    this.getPost()
  }
  getPost = () =>{
        const URL = window.location.href
        var fullurl = URL,
        url = "/" + fullurl.split("/")[3];

        if(url === '/profile'){
            const Key = new FormData()
            Key.append('token', this.props.param )
            API.post("/auth-token", Key)
            .then(res => {
                if(res.data.userId){
                    this.setState({
                        userId : res.data.userId
                    })
                }
                const userId = new FormData()
                userId.append('userId', res.data.userId)
                API.post("/post/get-post", userId)
                .then(res => {
                    this.setState({
                        post : this.state.post.concat(res.data)
                    })
                })
            })
        }else if(url === '/'){
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
    Data.append('data', this.state.data)
    Data.append('date', this.state.date)
    Data.append('userId', this.state.userId)
    Data.append('description', this.state.description)
    Data.append('totalTime', this.state.totalTime)
    Data.append('totalDistance', this.state.totalDistance)
    Data.append('paceAverage', this.state.paceAverage)
    Data.append('postPhoto', this.state.postPhotoUrl)
    API.post("/post/posts", Data)
    .then(res => {
        if(res.data.post == true){
            this.setState({
                post : [],
                postPhoto : null,
                postPhotoUrl : null,
                description : '',
                totalDistance : '',
                paceAverage : '',
                totalTime : '',
                
            })
            this.getPost()
        }
    })
  }
  handleChangePhoto = (e) => {
    this.setState({
        postPhoto : URL.createObjectURL(e.target.files[0]),
    })
    const storageRef = firebase.storage().ref(`${this.props.email}/postphoto/${e.target.files[0].name}`);
    const task = storageRef.put(e.target.files[0])
    task.on(`state_changed` , (snapshort) => {
        let percentage = (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
        this.setState({
            uploadper : percentage
        })
    } , (error) => {
        this.setState({
            messag:`Upload error : ${error.message}`
        })
    } , () => {
        this.setState({
            messag:`Upload Success`,
        })
        task.snapshot.ref.getDownloadURL().then((downloadUrl) =>{
          alert("Upload Success")
          this.setState({
            postPhotoUrl : downloadUrl
          })  
        })
    }) 
  }
  handleClosePhoto = () =>{
    this.setState({
      postPhoto : null,
      postPhotoUrl : null
    })
  }
  renderPhoto = () => {
    if(this.state.postPhoto !== null){
      return(
        <div className="photo-post">
            <div className="top-right">
              <button className="btn btn-danger rounded-circle" onClick={this.handleClosePhoto}>X</button>
            </div>
            <img src={this.state.postPhoto}/>
            <Progress className="mt-2 mb-2" color="info" value={this.state.uploadper} />
        </div>
      )
    }
  }
  renderPostBox = () =>{
    const URL = window.location.href
    var fullurl = URL,
    url = "/" + fullurl.split("/")[3];
    if(url === "/" || url === "/profile" && localStorage.getItem('key') === this.props.param){
      return(
        <div className="mt-4">
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
            {this.renderPhoto()}                       
            <div className="row text-center pb-2 mt-3">
              <div className="col-sm-12 col-12">
                <input id="upload-photo-post" onChange={this.handleChangePhoto} type="file"/>
                <label htmlFor="upload-photo-post" id="for-picture" className="btn btn-outline-info">Upload photo</label>
              </div>              
            </div>
          </Card>
          <div className="head-post-box">
            <button className="btn btn-info w-100" onClick={this.handleClick}>
              POST
            </button>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderPostBox()}
        {this.state.post.reverse().map((datas) => {
          return (
            <div key={datas.postId}>
              <LazyLoad offsetHorizontal={300}>              
                <UploadPost userId={this.state.userId} data={datas}></UploadPost>
              </LazyLoad>
            </div>
          );
        })}
      </div>
    );
  }
}

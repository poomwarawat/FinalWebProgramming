import React, { Component } from "react";
import API from "../API/API";
import UploadPost from "../component/UploadPost";
import { Progress } from 'reactstrap'
import firebase from 'firebase'
import 'react-image-lightbox/style.css'; 
import LazyLoad from 'react-lazy-load';
import ImageUploader from 'react-images-upload';
import PhotoUpload from './Album/PhotoUpload'

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
        uploadState : true,
        token : this.props.param,
        pictures: [],
        uploaderState : "inline"  ,
        albumname : "",
        uploadper1 : null  
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
        // console.log(this.props.match.params)        
        if(url === '/profile'){            
            const { id } = this.props.match.params
            console.log(id)
            const Key = new FormData()
            Key.append('token', id)
            API.post("/auth-token", Key)
            .then(res => {
              console.log(res.data)
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
    if(this.state.uploadState === true){
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
                  uploadState : false
                  
              })
              this.getPost()
          }
      })
    }else{
      alert("Please wait fot picture upload")
    }
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
            uploadper : percentage,
            uploadState : false
        })
    } , (error) => {
        this.setState({
            messag:`Upload error : ${error.message}`
        })
    } , () => {
        this.setState({
            messag:`Upload Success`,
            uploadState : true
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
  onDrop = (picture) => {
    this.setState({
        pictures: this.state.pictures.concat(picture),
        uploaderState : "none"
    });
  }
  handleReset = () => {
    this.setState({
      pictures : [],
      uploaderState : "inline"
    })
    window.location.reload()
  }  
  handleUpload = () =>{    
    // console.log(this.state.albumname)
    // console.log(this.state.userId)
    const AlbumName = new FormData()
    AlbumName.append("name", this.state.albumname)
    AlbumName.append("userId", this.state.userId)
    API.post("/post/upload-album", AlbumName)
    .then(res => {
      if(res.data.add === true){
        for (let index = 0; index < this.state.pictures.length; index++) {
          var photo = this.state.pictures[index]
          var name = photo.name
          const storageRef = firebase.storage().ref(`${this.props.email}/${this.state.albumname}/${name}`);
          const task = storageRef.put(photo)  
          task.on(`state_changed` , (snapshort) => {
            let percentage = (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
            this.setState({
                uploadper1 : percentage
            })
            } , (error) => {
                console.log(error)
            } , () => {
                console.log("Success")
                task.snapshot.ref.getDownloadURL().then((downloadUrl) =>{
                    console.log(downloadUrl)
                    const data = new FormData()
                    data.append("userId", this.state.userId)
                    data.append("name", this.state.albumname)
                    data.append("url", downloadUrl)
                    API.post("/post/upload-phto-album", (data))
                    .then(res => {
                      console.log(res.data)
                    })
                })
            })    
        }        
      }
    })    
  }
  renderPostBox = () =>{
    const Display = {
      display : this.state.uploaderState
    }
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
              <div className="col-sm-6 col-6">
                <input id="upload-photo-post" onChange={this.handleChangePhoto} type="file"/>
                <label htmlFor="upload-photo-post" id="for-picture">Upload photo</label>
              </div> 
              <div className="col-sm-6 col-6">
                <input id="upload-photo-post" onChange={this.handleChangePhoto} type="file"/>
                <label data-toggle="modal" data-target="#uploadAlbum" id="for-picture">Upload Album</label>
              </div>              
            </div>
          </Card>
          <div className="modal fade" id="uploadAlbum" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Album</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <p>Album name</p>
              <input className="form-control" onChange={this.handleChange} id="albumname"/>
              <div style={Display}>                
                <ImageUploader
                      withIcon={true}
                      buttonText='Choose images'
                      onChange={this.onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}                  
                />
              </div>
              {this.state.pictures ? <PhotoUpload pictures={this.state.pictures}/> : null}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={this.handleReset}>Reset</button>
                <button type="button" className="btn btn-primary" onClick={this.handleUpload}>Upload</button>
              </div>
            </div>
          </div>
        </div>

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

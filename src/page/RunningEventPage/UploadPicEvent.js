import React, { Component } from "react";
import firebase from "firebase";
import { Progress } from "reactstrap";
export default class UploadPicEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      postPhoto: null,
      postPhotoUrl: null,
      uploadper: null,
    };
    var firebaseConfig = {
      apiKey: "AIzaSyCu36Uit6DfffqB7DiQjyHLhCmAI-s6pxI",
      authDomain: "runrena-db93f.firebaseapp.com",
      databaseURL: "https://runrena-db93f.firebaseio.com",
      projectId: "runrena-db93f",
      storageBucket: "runrena-db93f.appspot.com",
      messagingSenderId: "1084016282506",
      appId: "1:1084016282506:web:2ce25be1a4215f46f4d673",
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  handleChangePhoto = (e) => {
    console.log("handel change photo");
    this.setState({
      postPhoto: URL.createObjectURL(e.target.files[0]),
    });
    const storageRef = firebase.storage().ref(`events/photo/${e.target.files[0].name}`);
    const task = storageRef.put(e.target.files[0]);
    task.on(
      `state_changed`,
      (snapshort) => {
        let percentage = (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
        this.setState({
          uploadper: percentage,
        });
      },
      (error) => {
        this.setState({
          messag: `Upload error : ${error.message}`,
        });
      },
      () => {
        this.setState({
          messag: `Upload Success`,
        });
        task.snapshot.ref.getDownloadURL().then((downloadUrl) => {
          alert("Upload Success");
          this.setState({
            postPhotoUrl: downloadUrl,
          });
          this.props.onPhotoChange(downloadUrl);
        });
      }
    );
  };
  renderPhoto = () => {
    if (this.state.postPhoto !== null) {
      return (
        <div className="b-photo-post">
          <div className="top-right"></div>
          <img src={this.state.postPhoto} />
          <Progress className="mt-2 mb-2" color="info" value={this.state.uploadper} />
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="row  pb-2 mb-4">
          <div className="col-md-12 ">
            <input id="upload-photo-post" onChange={this.handleChangePhoto} type="file" required />
            <label htmlFor="upload-photo-post" id="b-upload" className="btn btn-outline-info">
              Upload photo
            </label>
            {this.renderPhoto()}
          </div>
        </div>
      </div>
    );
  }
}

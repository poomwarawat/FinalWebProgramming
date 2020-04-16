import React, { Component } from 'react'
import {Progress} from 'reactstrap'
import firebase from 'firebase'
import API from '../API/API'

export default class UploadCover extends Component {
    constructor(props){
        super(props)
        this.state = {
            fileCover : null,
            fileurlCover : "https://weneedfun.com/wp-content/uploads/2016/08/The-Color-Grey-16.jpg",
            uploadperCover : null,
        }
    }
    handleChangeCover = (e) =>{
        this.setState({
            fileurlCover: URL.createObjectURL(e.target.files[0]),
            fileCover : e.target.files
        })
    }
    handleClick = () =>{
        const storageRef = firebase.storage().ref(`${this.props.email}/cover/${this.state.fileCover[0].name}`);
        const task = storageRef.put(this.state.fileCover[0])
        task.on(`state_changed` , (snapshort) => {
            let percentage = (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
            this.setState({
                uploadperCover : percentage
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
                let user = new FormData();
                user.append('url', downloadUrl)
                user.append('userId', this.props.userId)
                API.post('/upload-cover', user)
                .then(res => {
                    if(res.data.upload === true){
                        window.location.reload()
                    }
                })
                
            })
        }) 
    }
    render() {
        return (
            <div>
                <button className="cover-upload" data-toggle="modal" data-target="#exampleModal2">
                    Upload
                </button>
                <div className="modal fade" id="exampleModal2" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Profile Picture</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="preview-image-profile w-100">
                            <img className="w-100 image-preview" src={this.state.fileurlCover}></img>
                        </div>
                        <div className="input-image-profile">
                            <input onChange={this.handleChangeCover} type="file" id="fileCover" />
                            <label htmlFor="fileCover">choose a file</label>
                        </div>
                        <Progress className="mt-2 mb-2" color="info" value={this.state.uploadperCover} />
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.handleClick} type="button" className="btn btn-primary">Upload</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Album from '../component/Album'
import firebase from 'firebase'
import { Progress } from 'reactstrap';
import API from '../API/API'
import EditProfile from '../component/EditProfile'
import UploadCover from '../component/UploadCover'

export default class HeaderUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            urlpic : '',
            fileurl : "https://weneedfun.com/wp-content/uploads/2016/08/The-Color-Grey-16.jpg",
            file : null,
            uploadper : null,
            messag : null,
            coverDefault : "http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"
        }
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
    renderPic = () =>{
        if(localStorage.getItem('key') === this.props.param){
            return(
                <div>
                    <img alt="" data-toggle="modal" data-target="#exampleModal" className="profilepic" src={this.props.user.urlpic}/>
                </div>
            )
        }else{
            return(
                <div>
                    <img alt="" src={this.props.user.urlpic}/>
                </div>
            )
        }
    }
    handleChangeProfile = (e) =>{
        this.setState({
            fileurl: URL.createObjectURL(e.target.files[0]),
            file : e.target.files
        })
    }
    handleClick = () =>{
        const storageRef = firebase.storage().ref(`${this.props.user.email}/profile`);
        const task = storageRef.put(this.state.file[0])
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
                let user = new FormData();
                user.append('url', downloadUrl)
                user.append('id', this.props.user.userId)
                API.post('/updateProfile', user)
                .then(res => {
                    if(res.data.upload === true){
                        window.location.reload()
                    }
                })
                
            })
        }) 
    }
    renderEdit = () =>{
        if(localStorage.getItem('key') === this.props.param){
            return(
               <div>
                    <EditProfile></EditProfile>
               </div>
            )
        }
    }
    renderUploadCover = () =>{
        if(localStorage.getItem('key') === this.props.param){
            return(
                <UploadCover userId={this.props.user.userId} email={this.props.user.email}></UploadCover>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="cover">
                    {/* {console.log(this.props.user)} */}
                    <img className="coverimg" src={this.props.user.cover} alt="Cinque Terre" width="1000" height="300"/>
                    <div className="top-left">
                        {this.renderUploadCover()}
                    </div>
                    <div className="bottomleft">
                        {this.renderPic()}
                    </div>
                </div>
                <div className="">
                    <div className="About">
                        <h1>{this.props.user.name + " " + this.props.user.lastname}</h1>
                        <p>{this.props.user.birthday}</p>
                        <p>{this.props.user.address + ", " + this.props.user.city}</p>
                    </div>
                    <div>    
                    {this.renderEdit()}
                    </div>
                </div>
                <Album></Album>
        
                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <img className="w-100 image-preview" src={this.state.fileurl}></img>
                        </div>
                        <div className="input-image-profile">
                            <input onChange={this.handleChangeProfile} type="file" id="fileProfile" />
                            <label htmlFor="fileProfile">choose a file</label>
                        </div>
                        <Progress className="mt-2 mb-2" color="info" value={this.state.uploadper} />
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

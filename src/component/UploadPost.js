import React, { Component } from 'react'
import CommentBox from './CommentBox'
import API from '../API/API'
import Likebtn from '../component/Likebtn'
import { Link } from 'react-router-dom'
import Lightbox from 'react-image-lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class UploadPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment : "",
            PostComment : [],
            photoIndex: 0,
            isOpen: false,
        }
    }
    componentWillMount(){
        this.getComment()
    }
    getComment = () =>{
        const postId = new FormData()
        postId.append("postId", this.props.data.postId)
        API.post("/post/get-comment", postId)
        .then(res => {
            this.setState({
                PostComment : this.state.PostComment.concat(res.data)
            })
        })
    }
    handleChange = (e) =>{
        this.setState({
            comment : e.target.value
        })
    }
    renderProfile = () =>{
        if(this.props.data.profileurl !== ""){
            return(
                <div className="comment-picture">
                    <LazyLoadImage    
                        effect="blur"                                                
                        src={this.props.data.profileurl} 
                    />
                </div>
                // <img src={this.props.data.profileurl} className="comment-picture" />
                
            )
        }else{
            return(
                <img src="http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png" className="comment-picture" />
            )
        }
    }
    handleClick = (e) =>{
        const Comment = new FormData()
        Comment.append("userId", this.props.userId)
        Comment.append("content", this.state.comment)
        Comment.append("postId", e.target.id)
        API.post("/post/post-comment", Comment)
        .then(res => {
            if(res.data.comment === true){
                this.setState({
                    PostComment : [],
                })
                this.getComment()
            }
        })
    }
    renderPostPhoto = () => {
        const { isOpen } = this.state;
        if(this.props.data.photo !== "null"){
            return(
                <div>
                    <button className="btn-post-photo" type="button" onClick={() => this.setState({ isOpen: true })}>                        
                    <div className="photo-post mt-2">                                     
                        <LazyLoadImage    
                        effect="blur"                        
                        height={300}                                            
                        src={this.props.data.photo} 
                         />                        
                    </div>                      
                    </button>                               
                    {isOpen && (
                    <Lightbox
                        mainSrc={this.props.data.photo}                        
                        onCloseRequest={() => this.setState({ isOpen: false })}                                                
                    />
                    )}
                </div>
            )
        }        
    }
    handleDeletePost = (e) =>{
        API.get(`/post/delete-post?postId=${e.target.id}`)
        .then(res => {
            if(res.data.delete === true){
                window.location.reload()
            }
        })
    }
    renderDeletePost = () =>{
        if(this.props.userId === this.props.data.userId){
            return(
                <div className="dropdown mt-3">
                    <a  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-h"></i></a>
                    <div className="dropdown-menu dropdown-primary dropdown-menu-right">
                        <button onClick={this.handleDeletePost} id={this.props.data.postId} className="dropdown-item"><i className="fa fa-trash"></i>&nbsp;&nbsp; Delete</button>
                    </div>
                </div>
            )   
        }else{
            return(
                <div className="dropdown mt-3">
                    <a  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-h"></i></a>
                    <div className="dropdown-menu dropdown-primary dropdown-menu-right">
                        <button className="dropdown-item"><i className="fa fa-trash"></i>&nbsp;&nbsp; Report</button>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="">
                <div id={this.props.data.postId} className="">
                    <div className="status-box">
                        <div className="media container mt-4">
                        <div className="media-body">
                           <div className="row mt-4">
                               <div className="col-sm-1 col-2">
                                    <div className="p_profile_pic">                     
                                        {this.renderProfile()}
                                    </div>
                               </div>
                               <div className="col-sm-10 col-8">
                                        <h5 id="name-post" className="mt-2 ml-3">
                                            <Link className="Link-name" to={`/profile/${this.props.data.token}`}>
                                                {this.props.data.firstname + " " + this.props.data.lastname}
                                            </Link>
                                        </h5>   
                               </div>   
                               <div className="col-sm-1 col-2">  
                                {this.renderDeletePost()}
                               </div>  
                               {this.renderPostPhoto()}                       
                               <div className="col-sm-12 col-12">
                                   <h4 className="mt-4">{this.props.data.activity_title}</h4>                            
                                    <p>{this.props.data.description}</p> 
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <div className="alert alert-secondary" role="alert">
                                                Distance : {this.props.data.total_distance} km.
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="alert alert-secondary" role="alert">
                                                Time : {this.props.data.totalTime} min.
                                            </div>
                                        </div>
                                    </div>
                               </div>                                                     
                           </div>
                            
                        </div>
                        </div>
                        <div>                                                                
                            <Likebtn userId={this.props.userId} postId={this.props.data.postId}></Likebtn>                                                                                                 
                        </div>                       
                        {
                            this.state.PostComment.map(datas =>{
                                return(
                                    <div key={datas.commentId}>
                                        <CommentBox data={datas}></CommentBox>
                                    </div>
                                )
                            })
                        }
                        <div className="row p-2">
                            <div className="col-sm-8 col-12">
                                <input onChange={this.handleChange} id="comment" className="form-control mt-2 comment-input" placeholder="Enter your comment"/>
                            </div>
                            <div className="col-sm-4 col-12">
                                <button id={this.props.data.postId} onClick={this.handleClick} className="btn btn-primary mt-2 w-100">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

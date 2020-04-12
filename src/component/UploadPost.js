import React, { Component } from 'react'
import CommentBox from './CommentBox'
import API from '../API/API'

export default class UploadPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            display1 : "",
            display2 : "none",
            comment : ""
        }
    }
   
    componentWillMount(){
        if(this.props.data){
            this.setState({
                display1 : "",
                display2 : "none"
            })
        }else{
            this.setState({
                display1 : "none",
                display2 : ""
            })
        }
    }
    handleChange = (e) =>{
        this.setState({
            comment : e.target.value
        })
    }
    handleClick = (e) =>{
        
    }
    render() {
        return (
            <div className="container">
                <div id={this.props.data.postId} className="">
                    <div className="status-box">
                        <div className="media container mt-4">
                        <div className="media-body">
                           <div className="row mt-4">
                               <div className="col-sm-1 col-2">
                                    <div className="p_profile_pic">                     
                                        <img src={this.props.data.profileurl} className="comment-picture" />
                                    </div>
                               </div>
                               <div className="col-sm-10 col-8">
                                        <h5 className="mt-3 ml-3">{this.props.data.activity_title}</h5>   
                               </div>   
                               <div className="col-sm-1 col-2">
                                   
                               <div className="dropdown mt-3">
                                    <a  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-h"></i></a>
                                    <div className="dropdown-menu dropdown-primary">
                                        <a className="dropdown-item"><i className="fa fa-trash"></i>&nbsp;&nbsp; Delete</a>
                                    </div>
                                </div>
                               </div>                           
                               <div className="col-sm-12 col-12">
                                    <p className="mt-3">{this.props.data.total_distance}</p> 
                               </div>                                                     
                           </div>
                            
                        </div>
                        </div>
                        <div className="grap">
                            <div className="row">
                                    <div className="col-sm-2 col-6">
                                        <button className="btn btn-light w-100 btn-like"><i className="fa fa-heart-o"></i> Like</button>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <button className="btn btn-light w-100 btn-like"><i className="fa fa-comment-o"></i> Comment</button>
                                    </div>                                    
                            </div>
                        </div>                       
                        {/* <CommentBox userID={this.props.data.id}></CommentBox> */}
                        <div className="row p-2">
                            <div className="col-sm-8 col-12">
                                <input onChange={this.handleChange} id={`comment${this.props.data.postId}`} className="form-control mt-2" placeholder="Enter your comment"/>
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

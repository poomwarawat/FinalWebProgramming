import React, { Component } from 'react'
import API from '../API/API'
import { Link } from 'react-router-dom'

export default class Likebtn extends Component {
    constructor(props){
        super(props)
        this.state = {
            postId : this.props.postId,
            like : true,
            userLike : []
        }
    }
    componentWillMount(){
        this.getLike()
        this.getUserlike()
    }
    getLike = () =>{
        const token = new FormData()
        token.append("token", localStorage.getItem('key'))
        API.post("/auth-token", token)
        .then(res => {
            this.setState({userId : res.data.userId})
            API.get(`/post/get-like?postId=${this.state.postId}&userId=${res.data.userId}`)
            .then(res =>{
                if(res.data.like === true){
                    this.setState({ like : false})
                }
            })
        })
        
    }
    handleLike =  (e) =>{
        const Like = new FormData()
        Like.append("userId", this.state.userId)
        Like.append("postId", this.state.postId)
        API.post("/post/post-like", Like)
        .then(res => {
            if(res.data.like === true){
                this.setState({ like : false})
            }
        })
    }
    handleUnlike = (e) =>{
        const Like = new FormData
        Like.append("userId", this.state.userId)
        Like.append("postId", this.state.postId)
        API.post("/post/delete-like", Like)
        .then(res => {
            if(res.data.unlike === true){
                this.setState({ like : true})
            }
        })
    }
    getUserlike = () =>{
        const postId = new FormData
        postId.append("postId", this.state.postId)
        API.post("/post/get-user-like", postId)
        .then(res => {
            if(res.data){
                this.setState({
                    userLike : this.state.userLike.concat(res.data)
                })
            }
        })
    }
    renderLike = () =>{
        if(this.state.like === true){
            return(
                <div className="row">
                    <div className="col-sm-2 col-6">
                        <button id={this.state.postId} onClick={this.handleLike} className="btn btn-light w-100 btn-like"><i className="fa fa-heart-o"></i> Like</button>
                    </div>
                    <div className="col-sm-3 col-6">
                        <button className="btn btn-light w-100 btn-like"><i className="fa fa-comment-o"></i> Comment</button>
                    </div>
                </div>   
            )
        }else if(this.state.like === false){
            return(
                <div className="row">
                    <div className="col-sm-2 col-6">
                        <button id={this.state.postId} onClick={this.handleUnlike} className="btn btn-light w-100 btn-like"><i className="fa fa-heart"></i> Unlike</button>
                    </div>
                    <div className="col-sm-3 col-6">
                        <button className="btn btn-light w-100 btn-like"><i className="fa fa-comment-o"></i> Comment</button>
                    </div>   
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="ml-3">
                {
                    this.state.userLike.map((datas, index) =>{
                        if(index < 3){
                            return(                            
                                <span key={index}><Link className="Link-name" to={`/profile/${datas.token}`}> {datas.firstname} {datas.lastname}</Link> and</span>
                            )
                        }else if(index === 3){
                            return(
                                <span key={index}>...</span>
                            )
                        }
                    })
                }
                </div>
                <div className="grap">
                    {this.renderLike()}
                </div>
            </div>
        )
    }
}

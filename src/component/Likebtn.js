import React, { Component } from 'react'
import API from '../API/API'

export default class Likebtn extends Component {
    constructor(props){
        super(props)
        this.state = {
            postId : this.props.postId,
            userId : this.props.userId,
            like : true
        }
    }
    componentWillMount(){
        this.getLike()
    }
    getLike = () =>{
        const Data = new FormData
        Data.append("userId", this.state.userId)
        Data.append("postId", this.state.postId)
        API.post("/post/get-like", Data)
        .then(res =>{
            if(res.data.like === true){
                this.setState({ like : false})
            }
        })
    }
    handleLike =  (e) =>{
        alert(e.target.id)
        const Like = new FormData()
        Like.append("userId", this.state.userId)
        Like.append("postId", e.target.id)
        API.post("/post/post-like", Like)
        .then(res => {
            if(res.data.like === true){
                this.setState({ like : false})
            }
        })
    }
    handleUnlike = (e) =>{
        alert(e.target.id)
        const Like = new FormData
        Like.append("userId", this.state.userId)
        Like.append("postId", e.target.id)
        API.post("/post/delete-like", Like)
        .then(res => {
            if(res.data.unlike === true){
                this.setState({ like : true})
            }
        })
    }
    renderLike = () =>{
        if(this.state.like === true){
            return(
                <button id={this.state.postId} onClick={this.handleLike} className="btn btn-light w-100 btn-like"><i className="fa fa-heart-o"></i> Like</button>
            )
        }else if(this.state.like === false){
            return(
                <button id={this.state.postId} onClick={this.handleUnlike} className="btn btn-light w-100 btn-like"><i className="fa fa-heart"></i> Unlike</button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderLike()}
            </div>
        )
    }
}

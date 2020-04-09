import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'
import Chat from '../component/Chat'
import TopFeed from '../component/TopFeed'
import UploadPost from '../component/UploadPost'
import ToTop from '../component/ToTop'
import PostStatus from '../component/PostStatus'
import API from '../API/API'

export default class Feed extends Component {
    constructor(props){
        super(props)
        this.state = {
            post : []
        }
    }
    componentWillMount(){
        API.get('/getpost.php')
        .then(res =>{
            this.setState({
                post : this.state.post.concat(res.data)
            })
        })
        .then(res =>{
            this.renderPost()
        })
    }
    renderPost = () =>{
        return(
            <PostStatus email={this.props.email}></PostStatus>
        )
    }
    render() {
        return (
            <div className="bgFeed">
            <div className="feed">
                <div className="row">
                    <div className="col-sm-3 col-12">
                        <Nevigator></Nevigator>
                    </div>
                    <div className="col-sm-9 col-12 mt-2">
                        <TopFeed email={this.props.email}></TopFeed>
                        <div className="row">
                            <div className="col-sm-8 col-12">
                                <div className="Post">
                                    {this.renderPost()}
                                </div>
                            </div>
                            <div className="col-sm-4 col-12">
                                <div className="container">
                                    {/* <Chat></Chat> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToTop></ToTop>
            </div>
        )
    }
}

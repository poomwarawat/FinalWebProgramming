import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'
import TopFeed from '../component/TopFeed'
import ToTop from '../component/ToTop'
import PostStatus from '../component/PostStatus'
import API from '../API/API'
import Chat from '../component/Chat/Chat'

export default class Feed extends Component {
    constructor(props){
        super(props)
        this.state = {
            post : []
        }
    }
    componentWillMount(){
        
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

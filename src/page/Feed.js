import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'
import Chat from '../component/Chat'
import TopFeed from '../component/TopFeed'
import UploadPost from '../component/UploadPost'
import ToTop from '../component/ToTop'
import PostStatus from '../component/PostStatus'

export default class Feed extends Component {
    render() {
        return (
            <div className="bgFeed">
            <div className="feed">
                <div className="row">
                    <div className="col-sm-3 col-12">
                        <Nevigator></Nevigator>
                    </div>
                    <div className="col-sm-9 col-12 mt-2">
                        <TopFeed></TopFeed>
                        <div className="row">
                            <div className="col-sm-8 col-12">
                                <div className="Post">
                                    <PostStatus></PostStatus>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                    <UploadPost></UploadPost>
                                </div>
                            </div>
                            <div className="col-sm-4 col-12">
                                <div className="container">
                                    <Chat></Chat>
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

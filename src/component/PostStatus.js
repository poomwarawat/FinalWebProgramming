import React, { Component } from 'react'

export default class PostStatus extends Component {
    render() {
        return (
            <div className="container mt-4">
                <h3>Your Status</h3>
                <div className="mt-2 post-box">
                    <div className="head-post-box">
                        <p>Update your today running status</p>
                    </div>
                    <textarea placeholder="   Enter your status..."></textarea>
                    <div className="head-post-box">
                        <button className="btn btn-info w-100">POST</button>
                    </div>
                </div>
            </div>
        )
    }
}

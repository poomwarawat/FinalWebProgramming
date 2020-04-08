import React, { Component } from 'react'

export default class UploadPost extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="media container mt-4">
                <div className="media-body">
                    <h5 className="mt-0">{this.props.data.name + " " + this.props.data.lastname}</h5>
                    <p>{this.props.data.data}</p>
                    {/* <p className="mb-0">{this.props.data.date}</p> */}
                </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class UploadPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.data,
            display1 : "",
            display2 : "none"
        }
    }
    componentWillMount(){
        if(this.state.data){
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
    render() {
        const none = {
            display : this.state.display1
            
        }
        const show = {
            display : this.state.display2
        }
        return (
            <div>
                <div style={none} id={this.state.data.id} className="container">
                    <div className="status-box">
                        <div className="media container mt-4">
                        <div className="media-body">
                            <h5 className="mt-3">{this.state.data.name + " " + this.state.data.lastname}</h5>
                            <p className="mt-3">{this.state.data.data}</p>
                        </div>
                        </div>
                        <div className="container">
                            <button className="btn btn-light w-100 btn-like">Like</button>
                        </div>
                        <div className="row container">
                            <div className="col-sm-10 col-12">
                                <input className="form-control mt-2" placeholder="Enter your comment"/>
                            </div>
                            <div className="col-sm-2 col-12">
                                <button className="btn btn-primary mt-2">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={show}>
                    <p>Start your first post!!</p>
                </div>
            </div>
        )
    }
}

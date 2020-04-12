import React, { Component } from 'react'
import API from '../API/API'
import UploadPost from '../component/UploadPost'

export default class PostStatus extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : '',
            date : new Date(),
            userId : ''
        }
    }
    componentWillMount(){
        const Key = new FormData()
        Key.append('token', localStorage.getItem('key') )
        API.post("/auth-token", Key)
        .then(res => {
            if(res.data.userId){
                this.setState({
                    userId : res.data.userId
                })
            }
        })
    }

    handleChange = (e) =>{
        const name = e.target.id
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }
    handleClick = () =>{
        const Data = new FormData()
        Data.append('data', this.state.data)
        Data.append('date', this.state.date)
        Data.append('userId', this.state.userId)
        API.post("/post/posts", Data)
        .then(res => {
            if(res.data.post == true){
                alert("Post complete")
            }
        })
    }
    render() {
        return (
            <div>
                <div className="mt-4">
                    <h3>Your Status</h3>
                    <div className="mt-2 post-box">
                        <div className="head-post-box">
                            <p>Update your today running status</p>
                        </div>
                        <textarea placeholder="   Enter your status..." value={this.state.data} id="data" onChange={this.handleChange}></textarea>
                        <div className="head-post-box">
                            <button className="btn btn-info w-100" onClick={this.handleClick}>POST</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

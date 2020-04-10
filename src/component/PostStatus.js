import React, { Component } from 'react'
import API from '../API/API'
import UploadPost from '../component/UploadPost'

export default class PostStatus extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            data : '',
            date : new Date(),
            name : '',
            lastname : '',
            post : []
        }
    }
    componentWillMount(){
            let key = new FormData();
            key.append('key', localStorage.getItem('key'))
            API({
                method : "POST",
                url: '/getprofile.php',
                data: key,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(res => {
                this.setState({
                    email : res.data.email,
                    name : res.data.name,
                    lastname : res.data.lastname
                })
                this.getPost()
            })
        
    }
    getPost = () =>{
        const URL = window.location.href
        var fullurl = URL,
        url = "/" + fullurl.split("/")[3];

        if(url === "/profile"){
            let Email = new FormData();
            Email.append('email', this.state.email)
                API({
                    method : "POST",
                    url: '/getpost.php',
                    data: Email,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                })
                .then(res =>{
                    console.log(res)
                    this.setState({
                        post : this.state.post.concat(res.data)
                    })
            })
        }else if(url === "/"){
            API.get("/getpost.php")
            .then(res =>{
                this.setState({
                    post : this.state.post.concat(res.data)
                })
            })
        }
        
    }
    handleChange = (e) =>{
        const name = e.target.id
        const value = e.target.value
        this.setState({
            [name] : value
        })
    }
    handleClick = () =>{
        let Token = new FormData();
        Token.append('key', localStorage.getItem('key'))
        API({
            method : "POST",
            url : "/getprofile.php",
            data : Token,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(res =>{
            let Data = new FormData();
            const { email, data, date, name, lastname } = this.state
            Data.append('email', email)
            Data.append('data', data)
            Data.append('date', date)
            Data.append('name', name)
            Data.append('lastname', lastname)
            Data.append('url', res.data.url)
            API({
                method : "POST",
                url: '/postmessage.php',
                data: Data,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(res =>{
                if(res.data === "success"){
                    this.setState({
                        data : '',
                        post : []
                    })
                    this.getPost()
                }
            })
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
                {
                    this.state.post.reverse().map(datas =>{
                        return(
                            <div key={datas.id}>
                                <UploadPost data={datas}></UploadPost>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

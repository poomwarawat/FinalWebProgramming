import React, { Component } from 'react'
import API from '../../API/API'
import Message from './Message'
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            friend : [],
            userId : '',
            chatroom : [],
            message : '',
            read : []            
        }
    }
    componentWillMount(){
        const token = new FormData()
        token.append("token", localStorage.getItem('key'))
        API.post("/auth-token", token)
        .then(res => {
            this.setState({ userId : res.data.userId})            
            API.get(`/myfriendme?userId=${res.data.userId}`)
            .then(res => {                                
                this.setState({                        
                    friend : this.state.friend.concat(res.data)                       
                })                                        
            })
            API.get(`/myfriend?userId=${res.data.userId}`)
            .then(res => {                              
                this.setState({                        
                    friend : this.state.friend.concat(res.data)                       
                })                                        
            })            
        })        
    }
    componentDidMount(){
        const token = new FormData()
        token.append("token", localStorage.getItem('key'))
        API.post("/auth-token", token)
        .then(res => {
            this.setState({ userId : res.data.userId})
            API.get(`/get-chat-box?userId=${res.data.userId}`)
            .then(res => {            
                this.setState({
                    chatroom : this.state.chatroom.concat(res.data)
                })
                this.renderRoom()
            })                        
        })          
    }
    handleClickFriend = (e) => {   
        this.setState({
            chatroom : []
        })             
        API.get(`/add-chat-box?userId=${this.state.userId}&friendId=${e.currentTarget.id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.add === true){                             
                this.componentDidMount()                                
            }
        })
        API.get(`/get-read-message?userId=${this.state.userId}&friendId=${e.currentTarget.id}`)        
    }    
    // getRead = (id) =>{
    //     var data =[]
    //     API.get(`/get-read?userId=${this.state.userId}&friendId=${id}`)
    //     .then(res => {            
    //         for (let index = 0; index < res.data.length; index++) {                
    //             if(res.data[index].state !== "read"){
    //                 data.push(res.data[index])
    //             }             
    //         }                                       
    //     })        
    //     console.log(data)
    // }    
    
    handleExit = (e) => {        
        this.setState({
            chatroom : []
        })        
        API.get(`/delete-chat-room?chatId=${e.currentTarget.id}`)
        .then(res => {
            if(res.data.delete === true) {                     
                this.componentDidMount()        
            }
        })
    }
    handleEnter = (target) =>{
        if(target.charCode==13){            
            API.get(`/send-message?userId=${this.state.userId}&friendId=${target.currentTarget.id}&message=${this.state.message}`)                          
            this.setState({
                message : ""
            })
        } 
    }    
    handleChage = (e) =>{
        this.setState({
            message : e.target.value
        })
    }
    renderRoom = () => {        
        return(
            this.state.chatroom.map((datas, index) => {                            
                return(
                    <div key={index} className="col-6">
                    <div id="chat-box" className="chat-box">
                        <div className="box-chat">                        
                            <div className="header-chat">
                                <span>{datas.firstname} {datas.lastname}</span>
                                <span className="float-right">
                                    <button id={datas.id} onClick={this.handleExit} className="exit-chat">X</button>
                                </span>                            
                            </div>
                        </div>
                        <div className="chat-space">                                        
                            <Message userId={this.state.userId} ms={this.state.message} friendId={datas.userId}></Message>
                        </div>
                        <div className="footer-chat">                            
                            <input placeholder="  enter your message here" value={this.state.message}  onChange={this.handleChage} id={datas.userId} onKeyPress={this.handleEnter} className="chat-input"></input>
                        </div>
                    </div> 
                    </div>
                )
            })
        )
    }
    render() {
        return (
            <div className="Chat"> 
                <h3>Your Friend</h3>
                <ul className="list-group list-group-flush">
                    {                        
                        this.state.friend.map((datas, index) => {                                                                                  
                            return(
                                <li key={datas.userId} className="list-group-item"> 
                                <LazyLoad offsetHorizontal={300}>
                                    <button className="friend-list-box" id={datas.userId} onClick={this.handleClickFriend}>                                        
                                        <LazyLoadImage 
                                        className="comment-picture"   
                                        effect="blur"                                                                                                           
                                        src={datas.profileurl} 
                                        />       
                                        {/* <img src={datas.profileurl} className="comment-picture"/> */}
                                        <span className="ml-2">{datas.firstname}</span>
                                        {/* {this.getRead(datas.userId)} */}
                                        {/* <span className="ml-2">{this.renderAlert()}</span> */}
                                    </button>
                                </LazyLoad>                                    
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="chat-box-area">
                <div className="row">
                {this.renderRoom()}
                </div> 
                </div>        
                </div>
        )
    }
}

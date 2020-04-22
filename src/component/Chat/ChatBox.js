import React, { Component } from 'react'
import API from '../../API/API'

export default class ChatBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname : '',
            lastname : '',
            picprofile : '',
            token : '',   
            chatId : this.props.data.id               
        }
    }
    componentDidMount(){
        // console.log(this.props.data.friendId)
        // console.log(this.props.userId)        
        API.get(`/find-friend?friendId=${this.props.data.friendId}`)
        .then(res => {            
            this.setState({
                firstname : res.data[0].firstname,
                lastname : res.data[0].lastname,
                picprofile : res.data[0].profileurl,
                token : res.data[0].token
            })
        })
    }
    handleExit = () =>{   
        console.log(this.state)  
        API.get(`/delete-chat-room?chatId=${this.state.chatId}`)    
        .then(res => {
            if(res) window.location.reload()
        })    
    }
    render() {        
        return (
            <div>
                <div id="chat-box" className="chat-box">
                    <div className="box-chat">                        
                        <div className="header-chat">
                            <span>{this.state.firstname}</span>
                            <span className="float-right">
                                <button onClick={this.handleExit} className="exit-chat">X</button>
                            </span>                            
                        </div>
                    </div>
                    <div className="chat-space"></div>
                    <div className="footer-chat">
                        <input placeholder="  enter your message here" className="chat-input"></input>
                    </div>
                </div>
            </div>
        )
    }
}

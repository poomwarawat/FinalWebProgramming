import React, { Component } from 'react'
import API from '../../API/API'

export default class FriendList extends Component {
    constructor(props){
        super(props)
        this.state = {
             userId : this.props.userId,
             friendId : this.props.data.userId,
             chat : [],
             users : [],
             display : "block"
        }
    }    
    componentDidMount(){        
        API.get(`/get-chat-box?userId=${this.state.userId}`)
        .then(res => {         
            this.setState({
                chat : this.state.chat.concat(res.data),                
            })
        })        
    }    
    handleClickFriend = () => {
        API.get(`/add-chat-box?userId=${this.state.userId}&friendId=${this.state.friendId}`)
        .then(res => {
            if(res.data.chat === true){
                this.setState({
                    chat : [],
                    display : "block"
                })
                this.componentDidMount()
            }
        })        
    }
    handleExit = (e) =>{            
        API.get(`/delete-chat-room?chatId=${e.target.id}`)    
        .then(res => {
            if(res.data.delete === true){
                this.setState({
                    chat : [],
                    display : "none"
                })
                this.componentDidMount()  
                this.renderChatBox()              
            }
        })    
    }
    renderChatBox = () =>{        
        const chatroom = {
            display : this.state.display
        }
        if(this.state.chat.length > 0){
            return(
                <div style={chatroom} className="chat-box-area">
                    <div className="row">
                        {
                            this.state.chat.map((datas, index) => {                                                                                      
                                return(
                                    <div key={index} className="col-6">
                                    <div id="chat-box" className="chat-box">
                                        <div className="box-chat">                        
                                            <div className="header-chat">
                                                <span>{datas.firstname}</span>                                                                                         
                                                <span className="float-right">
                                                    <button onClick={this.handleExit} id={datas.id} className="exit-chat">X</button>
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
                            })
                        }
                    </div>                                    
                </div>
            )
        }        
    }
    render() {
        return (
            <div>                
                <button onClick={this.handleClickFriend} className="friend-list-box">
                    <img src={this.props.data.profileurl} className="online-users" />
                    <span className="ml-2">{this.props.data.lastname}</span>
                </button>
                {this.renderChatBox()}
            </div>
        )
    }
}

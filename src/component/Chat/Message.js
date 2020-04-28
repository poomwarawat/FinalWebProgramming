import React, { Component } from 'react'
import API from '../../API/API'
import alert from './alert.mp3'

export default class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : [],                             
        }        
    }        
    componentDidMount(){                           
        API.get(`/read-message?userId=${this.props.userId}&friendId=${this.props.friendId}`)
        .then(res => {            
            this.setState({
                message : this.state.message.concat(res.data)
            })     
            this.refs.hello.scrollIntoView({ block: "end" });        
        })
        setInterval(() => {
            API.get(`/read-message?userId=${this.props.userId}&friendId=${this.props.friendId}`)
            .then(res => {
                if(this.state.message.length !== res.data.length){                    
                    this.setState({
                        message : []
                    })                                    
                    this.setState({
                        message : this.state.message.concat(res.data)
                    })  
                    this.refs.hello.scrollIntoView({ block: "end" });                                      
                }                
            })                    
        }, 100);                            
    }     
    renderMessage = () => {                                
        if(this.props.ms === ""){
            const message = this.state.message.map((datas, index) => {            
                const chatId = this.props.userId + "_" + this.props.friendId             
                if(chatId === datas.chatId){            
                    // console.log("********************************")
                    // console.log("--------------------------------")    
                    // console.log("right")                                        
                    // console.log("index : " + index)
                    // console.log("Length of message state : " + this.state.message.length)
                    // console.log(datas.toMessage)
                    // console.log("--------------------------------")
                    return(
                        <li key={index} className="message-me"><p className="float-right">{datas.toMessage}</p></li>                                 
                    )
                }else{                
                    // console.log("********************************")
                    // console.log("--------------------------------")
                    // console.log("left")                    
                    // console.log("index : " + index)
                    // console.log("Length of message state : " + this.state.message.length)
                    // console.log(datas.toMessage)
                    // console.log("--------------------------------")
                    if(this.state.message.length - 1 === index){
                        // console.log("Sound on")
                        this.handlePlaySound()
                    }
                    return(
                        <li key={index} className="message-friend"><p className="float-left">{datas.toMessage}</p></li>
                    )
                }            
            })        
            return message               
        }else{
            const message = this.state.message.map((datas, index) => {            
                const chatId = this.props.userId + "_" + this.props.friendId             
                if(chatId === datas.chatId){                
                    return(
                        <li key={index} className="message-me"><p className="float-right">{datas.toMessage}</p></li>                                 
                    )
                }else{                                    
                    return(
                        <li key={index} className="message-friend"><p className="float-left">{datas.toMessage}</p></li>
                    )
                }            
            })        
            return message   
        }        
    }
    
    handlePlaySound = () => {
        // console.log("here in func")
        let audio = new Audio(alert);
        audio.play()
    }
    render() {
        return (
            <div ref="hello" id="message">                                           
            <ul className="list-group">                                
                {this.renderMessage()}
            </ul>            
            </div>
        )
    }
}

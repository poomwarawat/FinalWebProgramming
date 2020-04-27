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
            this.refs.hello.scrollIntoView({ block: "end" })   
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
                    // this.refs.hello.scrollIntoView({ block: "end" })   
                }                
            })                    
        }, 100);                            
    }     
    count = []
    renderMessage = () => {
        var countRight = 0
        var countLeft = 0
        const message = this.state.message.map((datas, index) => {            
            const chatId = this.props.userId + "_" + this.props.friendId 
                               
            if(chatId === datas.chatId){
                countLeft=index
                return(
                    <li key={index} className="message-me"><p className="float-right">{datas.toMessage}</p></li>                                 
                )
            }else{   
                this.count.push(index)  
                countRight=index                              
                return(
                    <li key={index} className="message-friend"><p className="float-left">{datas.toMessage}</p></li>
                )
            }            
        })
        if(countRight > countLeft){            
            if(countRight === Math.max(...this.count)){
                this.handlePlaySound() 
            }
        }
        // console.log(countRight)        
        // console.log(Math.max(...this.count)) 
        return message               
    }
    
    handlePlaySound = () => {
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

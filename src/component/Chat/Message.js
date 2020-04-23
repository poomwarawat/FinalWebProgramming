import React, { Component } from 'react'
import API from '../../API/API'

export default class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            message : []
        }
    }
    componentDidMount(){        
        API.get(`/read-message?userId=${this.props.userId}&friendId=${this.props.friendId}`)
        .then(res => {
            this.setState({
                message : this.state.message.concat(res.data)
            })
        })
    }        
    render() {
        return (
            <div>                            
            <ul class="list-group">
                <li className="message-me"><p className="float-right">Hello</p></li>                
                <li className="message-friend"><p className="float-left">Test</p></li>                
                <li className="message-me">
                <p className="float-right">sdfdsfdsfdsfdsf</p>
                <p className="float-right">ffgdfgdfxcvx</p>    
                </li>  
                <li className="message-friend">
                <p className="float-left">Hello warawat</p>
                <p className="float-left">Good morning</p>
                </li> 
                <li className="message-me"><p className="float-right">aaaaaaaaaaaa</p></li>
                <li className="message-friend"><p className="float-left">kkkkkk</p></li>  
            </ul>
            </div>
        )
    }
}

import React, { Component } from 'react'
import API from '../../API/API'
import FriendList from './FriendList'

export default class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            friend : [],
            userId : ''
        }
    }
    componentDidMount(){
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
                console.log(res.data)                          
                this.setState({                        
                    friend : this.state.friend.concat(res.data)                       
                })                                        
            })
        })
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
                                    <FriendList data={datas} userId={this.state.userId} token={datas.token}></FriendList>
                                </li>
                            )
                        })
                    }
                </ul>                
            </div>
        )
    }
}

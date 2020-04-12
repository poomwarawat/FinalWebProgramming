import React, { Component } from 'react'
import Started from '../component/Start'
import Feed from '../page/Feed'
import API from '../API/API'

export default class Start extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : ""
        }
    }
    componentWillMount(){
        if(localStorage.getItem('key')){
            const key = new FormData()
            key.append('token', localStorage.getItem('key'))
            API.post('/auth-token', key)
            .then(res =>{
                if(res.data.email){
                    this.setState({
                        email : res.data.email
                    })
                }
            })
        }
    }
    renderPage = () =>{
        
        if(localStorage.getItem('key')){
            return(
                <Feed email={this.state.email}></Feed>
            )
        }else{
            return(
                <Started></Started>
            )
        }
    }
    render() {
        return (
            <div className="header">
                {
                    this.renderPage()
                }
            </div>
        )
    }
}

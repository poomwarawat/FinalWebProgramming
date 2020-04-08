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
            let key = new FormData();
            key.append('key', localStorage.getItem('key'))
            API({
                method : "POST",
                url: '/getuser.php',
                data: key,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(res =>{
                this.setState({ email : res.data})
            })
        }
    }
    renderPage = () =>{
        const { email } = this.state
        if(email !== ""){
            return(
                <Feed email={email}></Feed>
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

import React, { Component } from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import API from '../API/API'

export default class Start extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password : '',
            err : ''
        }
    }
    handleChange = (e) =>{
        const name = e.target.id
        const values = e.target.value
        this.setState({
            [name] : values
        })
    }
    handleClicked = () =>{
        const { email, password } = this.state
        let formData = new FormData();
        formData.append('email', email)
        formData.append('password', password)
        API.post('/login', formData)
        .then(res =>{
            if(res.data.err){
                console.log(res.data.err)
            }else{
                localStorage.setItem("key", res.data.token)
                window.location.reload()
            }
        })
    }
    errRender = () =>{
        if(this.state.err !== '' ){
            return(
                <div className="alert alert-danger" role="alert">
                    {this.state.err}
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="row">
                    <div className="col-sm-8 col-12"></div>
                    <div className="col-sm-3 col-12 SignInBox">
                        <div className="container p-4">
                            <h3>LOGIN</h3>
                            <p>For see awesome people</p>
                            <input onChange={this.handleChange} className="form-control" placeholder="Email" type="text" id="email"></input><br/>
                            <input onChange={this.handleChange} className="form-control" placeholder="Password" type="password" id="password"></input><br/>
                            <button className="btn btn-primary w-100" id="login" onClick={this.handleClicked}>Login</button><br/>
                            <p className="mt-2">Not member? 
                                <Link to="/register">
                                    <span>Sign Up</span>
                                </Link>
                            </p>
                            {this.errRender()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

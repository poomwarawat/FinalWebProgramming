import React, { Component } from 'react'
import Header from '../component/Header'
import {Link} from 'react-router-dom'

export default class Start extends Component {
    render() {
        return (
            <div className="header">
                <Header></Header>
                <div className="row">
                    <div className="col-sm-8 col-12"></div>
                    <div className="col-sm-3 col-12 SignInBox">
                        <div className="container p-4">
                            <h3>LOGIN</h3>
                            <p>For see awesome people</p>
                            <input className="form-control" placeholder="Email" type="text" id="email"></input><br/>
                            <input className="form-control" placeholder="Password" type="password" id="password"></input><br/>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="remember"></input>
                                <label className="form-check-label">Remember me</label>
                            </div>
                            <button className="btn btn-primary w-100" id="login">Login</button><br/>
                            <p className="mt-2">Not member? 
                                <Link to="/register">
                                    <span>Sign Up</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

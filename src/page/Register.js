import React, { Component } from 'react'
import Header from '../component/Header'

export default class Register extends Component {
    render() {
        return (
            <div className="register">
                <Header></Header>
                <div className="container pt-4">
                    <h1>Register</h1>
                    <div className="row">
                        <div className="col-sm-4 col-12">
                            <label>Name</label>
                            <input placeholder="Name" type="text" className="form-control" id="name"></input>
                        </div>
                        <div className="col-sm-4 col-12">
                            <label>Lastname</label>
                            <input placeholder="Lastname" type="text" className="form-control" id="lastname"></input>
                        </div>
                        <div className="col-sm-4 col-12">
                            <label>Birthday</label>
                            <input className="form-control" id="birthday" type="date"></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-5 col-12">
                            <label>Email</label>
                            <input placeholder="Email" type="email" className="form-control" id="email"></input>
                        </div>
                        <div className="col-sm-4 col-12">
                            <label>Address</label>
                            <input placeholder="Address" type="text" className="form-control" id="address"></input>
                        </div>
                        <div className="col-sm-3 col-12">
                            <label>City</label>
                            <input placeholder="City" type="text" className="form-control" id="city"></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-sm-5 col-12">
                            <label>Password</label>
                            <input placeholder="Password" type="password" className="form-control" id="password"></input>
                        </div>
                        <div className="col-sm-5 col-12">
                            <label>Re-Password</label>
                            <input placeholder="Re-Password" type="password" className="form-control" id="repassword"></input>
                        </div>
                    </div><br/>
                    <div className="row">
                        <div className="col-sm-3 col-12">
                            <button className="btn btn-primary w-100">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

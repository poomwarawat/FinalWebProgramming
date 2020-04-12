import React, { Component } from "react";
import Header from "../component/Header";
import API from "../API/API";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      birthday: "",
      email: "",
      address: "",
      city: "",
      password: "",
      repassword: "",
      err: "",
    };
  }
  handleSignUp = () =>{
    const Data = new FormData()
    Data.append("name", this.state.name)
    Data.append("lastname", this.state.lastname)
    Data.append("birthday", this.state.birthday)
    Data.append("email", this.state.email)
    Data.append("address", this.state.address)
    Data.append("city", this.state.city)
    Data.append("password", this.state.password)
    Data.append("repassword", this.state.repassword)

    API.post('/register', Data  )
    .then(res =>{
      console.log(res.data)
    })
  }
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.id;
    this.setState({
      [name]: value,
    });
  };
  renderErr = () => {
    if (this.state.err !== "") {
      return (
        <div className="col-sm-5 col-12">
          <div className="alert alert-danger" role="alert">
            {this.state.err}
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="register">
        <Header></Header>
        <div className="container pt-4">
          <h1>Register</h1>
          <div className="row">
            <div className="col-sm-4 col-12">
              <label>Name</label>
              <input
                onChange={this.handleChange}
                placeholder="Name"
                type="text"
                className="form-control"
                id="name"
              ></input>
            </div>
            <div className="col-sm-4 col-12">
              <label>Lastname</label>
              <input
                onChange={this.handleChange}
                placeholder="Lastname"
                type="text"
                className="form-control"
                id="lastname"
              ></input>
            </div>
            <div className="col-sm-4 col-12">
              <label>Birthday</label>
              <input onChange={this.handleChange} className="form-control" id="birthday" type="date"></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-5 col-12">
              <label>Email</label>
              <input
                onChange={this.handleChange}
                placeholder="Email"
                type="email"
                className="form-control"
                id="email"
              ></input>
            </div>
            <div className="col-sm-4 col-12">
              <label>Address</label>
              <input
                onChange={this.handleChange}
                placeholder="Address"
                type="text"
                className="form-control"
                id="address"
              ></input>
            </div>
            <div className="col-sm-3 col-12">
              <label>City</label>
              <input
                onChange={this.handleChange}
                placeholder="City"
                type="text"
                className="form-control"
                id="city"
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-5 col-12">
              <label>Password</label>
              <input
                onChange={this.handleChange}
                placeholder="Password"
                type="password"
                className="form-control"
                id="password"
              ></input>
            </div>
            <div className="col-sm-5 col-12">
              <label>Re-Password</label>
              <input
                onChange={this.handleChange}
                placeholder="Re-Password"
                type="password"
                className="form-control"
                id="repassword"
              ></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-5 col-12">
              <button className="btn btn-primary w-100" onClick={this.handleSignUp}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="row mt-4">{this.renderErr()}</div>
        </div>
      </div>
    );
  }
}

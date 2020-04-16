import React, { Component } from 'react'
import API from '../API/API'

export default class EditProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname : '',
            lastname : '',
            birthday : '',
            address : '',
            city : '',
            userId : ''
        }
    }
    componentWillMount(){
        const token = new FormData()
        token.append("token", localStorage.getItem('key'))
        API.post("/auth-token", token)
        .then(res => {
            this.setState({ 
                userId : res.data.userId,
                firstname : res.data.name,
                lastname : res.data.lastname,
                birthday : res.data.birthday,
                address : res.data.address,
                city : res.data.city,
            })
        })
    }
    handleChange = (e) =>{
        const value = e.target.value
        const name = e.target.id
        this.setState({
            [name] : value
        })
    }
    handleClick = () =>{
        const Data = new FormData()
        Data.append("userId", this.state.userId)
        Data.append("firstname", this.state.firstname)
        Data.append("lastname", this.state.lastname)
        Data.append("birthday", this.state.birthday)
        Data.append("address", this.state.address)
        Data.append("city", this.state.city)
        API.post("/update-profile", Data)
        .then(res => {
            if(res.data.upload === true){
                window.location.reload()
            }
        })
    }
    render() {
        return (
            <div>
                <button className="alert alert-danger w-100" role="alert" data-toggle="modal" data-target="#exampleModal1">
                            Edit Profile
                </button>
                <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="firstname">Name</label>
                        <input required type="text" className="form-control" value={this.state.firstname} onChange={this.handleChange} id="firstname" placeholder="enter your name"/>
                        <label htmlFor="lastname">Lastname</label>
                        <input required type="text" className="form-control" value={this.state.lastname} onChange={this.handleChange} id="lastname" placeholder="enter your lastname"/> 
                        <label htmlFor="birthday">Birthday</label>
                        <input required type="date" className="form-control" value={this.state.birthday} onChange={this.handleChange} id="birthday"/>
                        <label htmlFor="address">Address</label>
                        <input required type="text" className="form-control" value={this.state.address} onChange={this.handleChange} id="address" placeholder="enter your address"/>
                        <label htmlFor="city">City</label>
                        <input required type="text" className="form-control" value={this.state.city} onChange={this.handleChange} id="city" placeholder="enter your city"/>                        
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={this.handleClick} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

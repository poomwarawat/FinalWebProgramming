import React, { Component } from 'react'
import API from '../API/API'

export default class AddBtn extends Component {
    constructor(props){
        super(props)
        this.state = {
            btn : true,
            userId : this.props.userId,
            friendId : this.props.data.userId
        }
    }
    componentWillMount(){
        const Data = new FormData()
        Data.append("userId", this.state.userId)
        Data.append("friendId", this.state.friendId)
        API.post("/friend/check-friend", Data)
        .then(res => {
            if(res.data.state === 'add'){
                this.setState({
                    btn : false
                })
            }
        })
    }
    handleAdd = (e) =>{
        const Data = new FormData()
        Data.append("userId", this.props.userId)
        Data.append("friendId", e.target.id)
        API.post('/friend/add-friend', Data)
        .then(res => {
            if(res.data.add === true){
                this.setState({
                    btn : false
                })
            }
        })
    }
    handleCancel = (e) =>{
        const Data = new FormData()
        Data.append("userId", this.props.userId)
        Data.append("friendId", e.target.id)
        API.post('/friend/cancel-friend', Data)
        .then(res => {
            if(res.data.cancel === true){
                this.setState({
                    btn : true
                })
            }
        })
    }
    handleConfirm = (e) =>{
        const Data = new FormData()
        Data.append("userId", this.props.userId)
        Data.append("friendId", e.target.id)
        API.post('/friend/confirm-request', Data)
        .then(res => {
            console.log(res.data)
        })
    }
    hadleUnfriend = () =>{
        alert("Unfriend")
    }
    renderBtn = () =>{
        if(this.props.data.state === "add"){
            return(
                <button onClick={this.handleConfirm} id={this.props.data.userId} className="btn btn-primary w-100 float-right">confirm</button>
            )
        }
        if(this.props.data.state === "friend"){
            return(
                <button onClick={this.hadleUnfriend} id={this.props.data.userId} className="btn btn-danger w-100 float-right">unfriend</button>
            )
        }
        if(this.state.btn === true){
            return(
                <button onClick={this.handleAdd} id={this.props.data.userId} className="btn btn-primary w-100 float-right">add</button>
            )
        }else{
            return(
                <button onClick={this.handleCancel} id={this.props.data.userId} className="btn btn-danger w-100 float-right">cancel</button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderBtn()}
            </div>
        )
    }
}

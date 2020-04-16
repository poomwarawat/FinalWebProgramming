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
        API.get(`/friend/check-friend?userId=${this.state.userId}&friendId=${this.state.friendId}`)
        .then(res => {
            if(res.data.state === 'add'){
                this.setState({
                    btn : false
                })
            }
        })
    }
    handleAdd = (e) =>{
        alert(e.target.id)
        API.post(`/friend/add-friend`)
        .then(res => {
            console.log(res.data)
            // if(res.data.add === true){
            //     this.setState({
            //         btn : false
            //     })
            // }
        })
    }
    handleCancel = (e) =>{
        API.get(`/friend/cancel-friend?userId=${this.props.userId}&friendId=${e.target.id}`)
        .then(res => {
            if(res.data.cancel === true){
                this.setState({
                    btn : true
                })
            }
        })
    }
    handleConfirm = (e) =>{
        API.get(`/friend/confirm-request?userId=${this.props.userId}&friendId=${e.target.id}`)
        .then(res => {
            console.log(res.data)
        })
    }
    hadleUnfriend = (e) =>{
        API.get(`/friend/delete-friend?resId=${e.target.id}`)
        .then(res => {
            console.log(res.data)
        })
    }
    renderBtn = () =>{
        if(this.props.data.state === "add"){
            return(
                <button onClick={this.handleConfirm} id={this.props.data.userId} className="btn btn-primary w-100 float-right">confirm</button>
            )
        }
        if(this.props.data.state === "friend"){
            return(
                <button onClick={this.hadleUnfriend} id={this.props.data.resId} className="btn btn-danger w-100 float-right">unfriend</button>
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

import React, { Component } from "react";
import API from "../API/API";

export default class AddBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: true,
      userId: this.props.userId,
      friendId: this.props.data.userId,
    };
  }
  // componentDidMount(){
  //     API.get(`/check-user-add?userId=${this.props.userId}&friendId=${this.props.data.userId}`)
  //     .then(res => {
  //         if(res.data.add === true){
  //             this.setState({
  //                 btn : false
  //             })
  //         }
  //     })
  // }
  handleAdd = (e) => {
    API.get(`/add-friend?userId=${this.props.userId}&friendId=${e.target.id}`).then((res) => {
      if (res.data.add === true) {
        this.setState({
          btn: false,
        });
      }
    });
  };
  handleCancel = (e) => {
    console.log(this.props.userId);
    console.log(this.props.data.userId);
    API.get(`/cancel-friend?userId=${this.props.userId}&friendId=${this.props.data.userId}`).then((res) => {
      if (res.data.cancel === true) {
        this.setState({
          btn: true,
        });
      }
    });
  };
  handleConfirm = (e) => {
    API.get(`/confirm-request?userId=${this.props.userId}&friendId=${e.target.id}`);
    window.location.reload();
  };
  hadleUnfriend = (e) => {
    API.get(`/delete-friend?resId=${e.target.id}`);
    window.location.reload();
  };
  renderBtn = () => {
    if (this.props.data.state === "friend" && this.props.unkey === "true") {
      return (
        <button onClick={this.hadleUnfriend} id={this.props.data.resId} className="btn btn-danger w-100 float-right">
          unfriend
        </button>
      );
    }
    if (this.props.data.state === "add") {
      return (
        <div className="row">
          <div className="col-sm-6 col-12 mt-1">
            <button
              onClick={this.handleConfirm}
              id={this.props.data.userId}
              className="btn btn-primary w-100 float-right"
            >
              confirm
            </button>
          </div>
          <div className="col-sm-6 col-12 mt-1">
            <button onClick={this.handleCancel} id={this.props.data.resId} className="btn btn-danger w-100 float-right">
              cancel
            </button>
          </div>
        </div>
      );
    } else {
      if (this.state.btn === true) {
        return (
          <button onClick={this.handleAdd} id={this.props.data.userId} className="btn btn-primary w-100 float-right">
            add
          </button>
        );
      }
      if (this.state.btn === false) {
        return (
          <button onClick={this.handleCancel} id={this.props.data.userId} className="btn btn-danger w-100 float-right">
            cancel
          </button>
        );
      }
    }
  };
  render() {
    return <div>{this.renderBtn()}</div>;
  }
}

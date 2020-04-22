import React, { Component } from "react";
import Nevigator from "../component/Nevigator";
import API from "../API/API";
import FriendBox from "../component/FriendBox";
import { Form } from "reactstrap";

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      new: [],
      request: [],
      myfriend: [],
      myfriendme: [],
    };
  }

  componentWillMount() {
    this.setState({
      request: [],
    });
    this.getFriend();
    this.getMyFriend();
    this.getMyFriendMe();
    this.getRequest();
  }
  getRequest = () => {
    const token = new FormData();
    token.append("token", localStorage.getItem("key"));
    API.post("/auth-token", token).then((res) => {
      this.setState({ userId: res.data.userId });
      API.get(`/friend-request?userId=${res.data.userId}`).then((res) => {
        this.setState({
          request: this.state.request.concat(res.data),
        });
      });
    });
  };
  getMyFriend = () => {
    const token = new FormData();
    token.append("token", localStorage.getItem("key"));
    API.post("/auth-token", token).then((res) => {
      this.setState({ userId: res.data.userId });
      API.get(`/myfriend?userId=${res.data.userId}`).then((res) => {
        this.setState({
          myfriend: this.state.myfriend.concat(res.data),
        });
      });
    });
  };
  getMyFriendMe = () => {
    const token = new FormData();
    token.append("token", localStorage.getItem("key"));
    API.post("/auth-token", token).then((res) => {
      this.setState({ userId: res.data.userId });
      API.get(`/myfriendme?userId=${res.data.userId}`).then((res) => {
        this.setState({
          myfriendme: this.state.myfriendme.concat(res.data),
        });
      });
    });
  };
  getFriend = () => {
    const token = new FormData();
    token.append("token", localStorage.getItem("key"));
    API.post("/auth-token", token).then((res) => {
      this.setState({ userId: res.data.userId });
      const Data = new FormData();
      Data.append("userId", res.data.userId);
      API.post(`/friend-list`, Data).then((res) => {
        this.setState({
          new: this.state.new.concat(res.data),
        });
      });
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-3 col-12">
          <Nevigator></Nevigator>
        </div>
        <div className="col-sm-8 col-12">
          <div className="friend-list container">
            <div className="friend">
              <h1>My Friend</h1>
              <FriendBox userId={this.state.userId} data={this.state.myfriend} unkey="true"></FriendBox>
              <FriendBox userId={this.state.userId} data={this.state.myfriendme} unkey="true"></FriendBox>
            </div>
            <div className="request-friend">
              <h1>My request</h1>
              <FriendBox userId={this.state.userId} data={this.state.request}></FriendBox>
            </div>
            <div className="New">
              <h1>Find your friends</h1>
              <FriendBox userId={this.state.userId} data={this.state.new}></FriendBox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

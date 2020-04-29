import React, { Component } from 'react'
import UserList from './UserList'
import SearchUser from './SearchUser'


export default class TopFeed extends Component {
    state = {
        eventData: null,
      };
    handleLogout = () =>{
        localStorage.removeItem("key")
        window.location.reload()
    }
    handelSearch = (eventDataSearch) => {
        // console.log("EventManagement -> handelSearch -> eventDataSearch", eventDataSearch);
        this.setState({ eventData: eventDataSearch });
      };
    render() {
        return (
            <div>
                <div className="row container">
                    <div className="col-sm-9 col-12 pt-4">
                    <SearchUser handelSearch={this.handelSearch}></SearchUser>     
                    <ul className="list-group" style={{width:"100%"}}>                        
                        {this.state.eventData ? <UserList userlist={this.state.eventData} /> : null}
                    </ul>               
                    </div>
                    <div className="col-sm-3 col-12">
                        <div className="ListProfile mt-2">
                            <div className="dropdown">
                                <div className="dropdown-toggle" id="userName" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.props.email}
                                </div>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                                    <button className="dropdown-item" onClick={this.handleLogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

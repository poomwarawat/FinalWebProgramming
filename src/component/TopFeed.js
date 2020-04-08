import React, { Component } from 'react'

export default class TopFeed extends Component {
    handleLogout = () =>{
        localStorage.removeItem("email")
        window.location.reload()
    }
    render() {
        return (
            <div>
                <div className="row container">
                    <div className="col-sm-10 col-12 pt-4">
                        <div className="input-group mb-3">
                            <div className="search">
                                <div className="input-group mb-3 ml-3">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-12">
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

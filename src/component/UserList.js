import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class UserList extends Component {
    render() {
        const { userlist } = this.props;
        return (
            <div id="user-list" className="user-list" style={{width:"85%"}}>
                {userlist &&
                    userlist.map((user) => {                    
                    return(
                        <Link to={`/profile/${user.token}`}>
                        <li className="list-group-item d-flex justify-content-between align-items-center w-100">{user.firstname} {user.lastname}</li>                        
                        </Link>
                    )
                })}
            </div>            
        )
    }
}

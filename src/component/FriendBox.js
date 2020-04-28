import React, { Component } from 'react'
import AddBtn from '../component/AddBtn'
import {Link} from 'react-router-dom'

export default class FriendBox extends Component {
    render() {
        return (
            <div>
                <ul className="list-group list-group-flush">
                {   
                    this.props.data.map((datas, index) => {                        
                        return(
                            <li key={index} className="list-group-item">
                                <div className="row">
                                    <div className="col-8 col-sm-8">
                                        <Link to={`/profile/${datas.token}`}>
                                            <p className="mt-1">{datas.firstname} {datas.lastname}</p>
                                        </Link>
                                    </div>
                                    <div className="col-4 col-sm-4">                                    
                                        <AddBtn userId={this.props.userId} data={datas} unkey={this.props.unkey}></AddBtn>
                                    </div>
                                </div>                                
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

import React, { Component } from 'react'
import API from '../API/API'
import { Link } from 'react-router-dom'

export default class CommentBox extends Component {
    renderPic = () =>{
        if(this.props.data.profileurl !== ""){
            return(
                <img className="comment-picture" src={this.props.data.profileurl} />
            )
        }else{
            return(
                <img className="comment-picture" src="http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png" />
            )
        }
    }
    render() {
        return (
            <div>
                <div className="row container mt-3">
                    <div className="col-sm-1 col-2">
                        {this.renderPic()}
                    </div>
                    <div className="col-sm-8 col-9 ml-3">
                        <div className="comment-box">
                            <Link className="Link-name" to={`/profile/${this.props.data.token}`}><p> {this.props.data.firstname} {this.props.data.lastname}</p></Link>
                            <p>{this.props.data.content}</p>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

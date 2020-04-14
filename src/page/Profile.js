import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'
import HeaderUser from '../component/HeaderUser'
import PostStatus from '../component/PostStatus'
import API from '../API/API'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            urlpic : ''
        }
    }
    //https://www.thairath.co.th/media/Dtbezn3nNUxytg04OL8mgI3NIEavohv2W18gLB2c0r2biv.jpg
    componentWillMount(){
        console.log("useless")
        const { id } = this.props.match.params
        const token = new FormData()
        token.append('token', id)
        API.post('/auth-token', token )
        .then(res =>{
            console.log(res.data.url)
            if(res.data.url === ""){
                this.setState({
                    urlpic : "http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png"
                })
            }else{
                this.setState({
                    urlpic : res.data.url
                })
            }
            this.setState({
                email : res.data.email,
                userId : res.data.userId,
                name : res.data.name,
                lastname : res.data.lastname,
                address : res.data.address,
                city : res.data.city,
                birthday : res.data.birthday
            })
        })
    }
    render() {
        return (
            <div className="row profile-page">
                <div className="col-sm-3 col-12">
                    <Nevigator></Nevigator>
                </div>
                <div className="col-sm-8 col-12">
                    <HeaderUser user={this.state}></HeaderUser>
                    <PostStatus email={this.state.email}></PostStatus>
                </div>
            </div>
        )
    }
}

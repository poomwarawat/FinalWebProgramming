import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'
import HeaderUser from '../component/HeaderUser'
import PostStatus from '../component/PostStatus'
import API from '../API/API'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            urlpic : '',
            params : '',
            cover : ''
        }
    }
    //https://www.thairath.co.th/media/Dtbezn3nNUxytg04OL8mgI3NIEavohv2W18gLB2c0r2biv.jpg
    componentDidMount = () => {
        const { id } = this.props.match.params
        console.log("Here is!!!!!!" + id)
        this.setState({ params : id })
        const token = new FormData()
        token.append('token', id)
        API.post(`/auth-token`, token)
        .then(res =>{
            console.log(res.data)
            if(res.data.url === "" || res.data.url === null){
                this.setState({
                    urlpic : "http://www.accountingweb.co.uk/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png"
                })
            }if(res.data.url !== ""){
                this.setState({
                    urlpic : res.data.url
                })
            }
            if(res.data.cover !== "" && res.data.cover !== null){
                this.setState({
                    cover : res.data.cover
                })
            }
            else{
                this.setState({
                    cover : "http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"
                })
            }
            
            this.setState({
                email : res.data.email,
                userId : res.data.userId,
                name : res.data.name,
                lastname : res.data.lastname,
                address : res.data.address,
                city : res.data.city,
                birthday : res.data.birthday,
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
                    <div className="container">
                        <HeaderUser param={this.state.params} user={this.state}></HeaderUser>
                        <PostStatus param={this.state.params} email={this.state.email}></PostStatus>
                    </div>
                </div>
            </div>
        )
    }
}

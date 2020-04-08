import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'
import HeaderUser from '../component/HeaderUser'
import PostStatus from '../component/PostStatus'
import UploadPost from '../component/UploadPost'
import API from '../API/API'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            id : '',
            name : '',
            lastname : '',
            address : '',
            city : '',
            birthday : '',
            urlpic : '',
            post : []
        }
    }
    //https://www.thairath.co.th/media/Dtbezn3nNUxytg04OL8mgI3NIEavohv2W18gLB2c0r2biv.jpg
    componentWillMount(){
        if(localStorage.getItem('key')){
            let key = new FormData();
            key.append('key', localStorage.getItem('key'))
            API({
                method : "POST",
                url: '/getprofile.php',
                data: key,
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(res =>{
                const { email, id, name, lastname, address, city, birthday, urlpic} = res.data
                this.setState({
                    email : email,
                    id : id,
                    name : name,
                    lastname : lastname,
                    address : address,
                    city : city,
                    birthday : birthday,
                    urlpic : urlpic
                })
            })
            API.get('/getpost.php')
            .then(res =>{
                this.setState({
                    post : this.state.post.concat(res.data)
                })
            })
        }
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
                    {
                        this.state.post.map(datas =>{
                            return(
                                <UploadPost data={datas}></UploadPost>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

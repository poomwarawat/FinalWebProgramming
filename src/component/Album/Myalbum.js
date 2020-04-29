import React, { Component } from 'react'
import Nevigator from '../Nevigator'
import AlbumBox from './AlbumBox'
import API from '../../API/API'

export default class Myalbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            album : []
        }
    }
    componentDidMount(){
        const token = new FormData()
        token.append("token", localStorage.getItem('key'))
        API.post('/auth-token', token)
        .then(res => {         
            API.post(`/post/get-album/${res.data.userId}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    album : this.state.album.concat(res.data)
                })
            })
        })
    }
    renderAlbum = () =>{
        const renderAL = this.state.album.map((data, index) => {
            return(
                <div className="col-sm-6 col-6" key={index}>
                    <AlbumBox Data={data}></AlbumBox>
                </div>
            )
        })
        return renderAL
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-3 col-12">
                    <Nevigator></Nevigator>
                </div>
                <div className="col-sm-9 col-12">
                    <div className="container mt-4">
                        <h1>My Album List</h1>
                    </div>
                    <div className="row container mt-4">
                        {this.renderAlbum()}
                    </div>
                </div>
            </div>
        )
    }
}

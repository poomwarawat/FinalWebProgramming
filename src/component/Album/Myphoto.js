import React, { Component } from 'react'
import Nevigator from '../Nevigator'
import API from '../../API/API'
import Lightbox from 'react-image-lightbox';

export default class Myphoto extends Component {
    constructor(props){
        super(props)
        this.state = {
            photos : [],
        }
    }
    componentDidMount(){
        const { id, name } = this.props.match.params
        console.log(id)
        console.log(name)          
        API.post(`/post/get-photo-album/${id}/${name}`)
        .then(res => {
            if(res.data){
                this.setState({
                    photos : this.state.photos.concat(res.data)
                })
            }
        })
    }
    renderPhoto = () =>{
        const photo = this.state.photos.map((photo, index) => {
            return(
                <div key={index} className="col-sm-3 col-3">
                    <img src={photo.url} className="w-100 p-2 photo-al"/>
                </div>
            )
        })
        return photo
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-3 col-12">
                    <Nevigator></Nevigator>
                </div>
                <div className="col-sm-9 col-12">
                    <div className="container mt-4">
                        <h1>My Album</h1>
                        <div className="row">
                            {this.renderPhoto()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Album from '../component/Album'

export default class HeaderUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            urlpic : ''
        }
    }
    componentWillMount(){
        if(this.props.user.urlpic !== ""){
            this.setState({
                urlpic : this.props.user.urlpic
            })
        }
    }
    renderPic = () =>{
        if(this.props.user.urlpic !== ""){
            return(
                <img src={this.state.urlpic}/>
            )
        }else{
            return(
                <img src="http://www.tourstouzbekistan.com/uploads/albums/photogallery/tajik_people_23.jpg"/>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="cover">
                    <img className="coverimg" src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg" alt="Cinque Terre" width="1000" height="300"/>
                    <div className="bottomleft">
                        {this.renderPic()}
                    </div>
                </div>
                <div className="container">
                    <div className="About">
                        <h1>{this.props.user.name + " " + this.props.user.lastname}</h1>
                        <p>{this.props.user.birthday}</p>
                        <p>{this.props.user.address + ", " + this.props.user.city}</p>
                    </div>
                    <div>    
                    <div className="alert alert-danger" role="alert">
                        Edit Profile
                    </div>
                    </div>
                </div>
                <Album></Album>
            </div>
        )
    }
}

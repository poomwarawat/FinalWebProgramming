import React, { Component } from 'react'
import Aboutuser from '../component/Aboutuser'
import Album from '../component/Album'

export default class HeaderUser extends Component {
    render() {
        return (
            <div>
                <div className="cover">
                    <img className="coverimg" src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg" alt="Cinque Terre" width="1000" height="300"/>
                    <div className="bottomleft">
                        <img src="http://www.tourstouzbekistan.com/uploads/albums/photogallery/tajik_people_23.jpg"/>
                    </div>
                </div>
                <Aboutuser></Aboutuser>
                <Album></Album>
            </div>
        )
    }
}

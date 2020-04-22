import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AlbumBox extends Component {
    render() {
        return (
            <div className="col-sm-6 col-6">
                <div className="album-box">
                    <div className="img-album">
                        <Link to="/myphoto">
                            <img src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"/>
                        </Link>
                    </div>
                    <div className="name-album">
                        <Link to="/myphoto">
                            <p>Album01</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

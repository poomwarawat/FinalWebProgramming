import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class AlbumBox extends Component {
    render() {
        return (
            <div >
                <div className="album-box mt-4 pt-2">
                    <div className="img-album">
                        <Link to={`/myphoto/${this.props.Data.userId}/${this.props.Data.albumname}`}>
                            <img src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"/>
                        </Link>
                    </div>
                    <div className="name-album">
                        <Link to={`/myphoto/${this.props.Data.userId}/${this.props.Data.albumname}`}>
                            <p>{this.props.Data.albumname}</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Album extends Component {
    render() {
        return (
            <div>
            <Link to="/myalbum">
                <h3>Your Album</h3>
            </Link>
            <div className="list-album">
                <div className="album">
                    <img src="https://simg.kapook.com/o/photo/129/kapook_world-128211.jpg" alt=""></img>
                </div>
                <div className="album">
                    <img src="https://simg.kapook.com/o/photo/129/kapook_world-128204.jpg" alt=""></img>
                </div>
                <div className="album">
                    <img src="https://simg.kapook.com/o/photo/129/kapook_world-128209.jpg" alt=""></img>
                </div>
            </div>
        </div>
        )
    }
}

import React, { Component } from 'react'
import Nevigator from '../Nevigator'
import AlbumBox from './AlbumBox'

export default class Myalbum extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3 col-12">
                    <Nevigator></Nevigator>
                </div>
                <div className="col-sm-9 col-12">
                    <div className="container mt-4">
                        <h1>My Album</h1>
                    </div>
                    <div className="row container mt-4">
                        <AlbumBox></AlbumBox>
                        <AlbumBox></AlbumBox>
                    </div>
                </div>
            </div>
        )
    }
}

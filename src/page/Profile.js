import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'
import HeaderUser from '../component/HeaderUser'

export default class Profile extends Component {
    render() {
        return (
            <div className="row profile-page">
                <div className="col-sm-3 col-12">
                    <Nevigator></Nevigator>
                </div>
                <div className="col-sm-8 col-12">
                    <HeaderUser></HeaderUser>
                </div>
            </div>
        )
    }
}

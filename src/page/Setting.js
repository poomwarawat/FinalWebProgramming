import React, { Component } from 'react'
import Nevigator from '../component/Nevigator'

export default class Setting extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3 col-12">
                    <Nevigator></Nevigator>
                </div>
                <div className="col-sm-9 col-12">
                    Setting
                </div>
            </div>
        )
    }
}

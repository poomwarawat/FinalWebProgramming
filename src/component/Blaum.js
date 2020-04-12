import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Blaum extends Component {
    render() {
        return (
        <div>
                <Link to='/Myalbum/Myphoto'>
                    <h3>Photo</h3>     
                </Link>
          
        </div>
        )
    }
}
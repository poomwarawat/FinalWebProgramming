import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nevigator extends Component {
    render() {
        return (
            <div>
                <div className="nevigator">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                    <img src="https://www.shareicon.net/data/512x512/2017/03/29/881757_run_512x512.png"  width="50" height="50" alt="RunnerIcon"></img>
                    <Link to="/">
                        <h3 className="navbar-brand mt-2 ml-3" id="header1">Runrena</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="sidetext">
                            <Link to='/'>
                                <h4>Home</h4>
                            </Link>
                            <Link to='/profile'>
                                <h4>Profile</h4>
                            </Link>
                            <Link to='/explorer'>
                                <h4>Exploere</h4>
                            </Link>
                            <hr/>
                            <Link to='/setting'>
                                <h4>Setting</h4>
                            </Link>
                        </div>
                    </div>
                    </nav>
                    <div className="sidetext1">
                            <Link to='/'>
                                <h4>Home</h4>
                            </Link>
                            <Link to='/profile'>
                                <h4>Profile</h4>
                            </Link>
                            <Link to='/explorer'>
                                <h4>Exploere</h4>
                            </Link>
                            <hr/>
                            <Link to='/setting'>
                                <h4>Setting</h4>
                            </Link>
                    </div>
                </div>
            </div>
        )
    }
}

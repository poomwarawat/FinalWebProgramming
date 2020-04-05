import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                <img src="https://www.shareicon.net/data/512x512/2017/03/29/881757_run_512x512.png"  width="50" height="50" alt="RunnerIcon"></img>
                <Link to="/">
                    <h3 className="navbar-brand mt-2 ml-3" id="header">Runrena</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <ul className="navbar-nav">
                            <li className="nav-item active text-center HeadText">
                                <Link to='/about'>
                                    <p className="nav-link" id="header">About Us</p>
                                </Link>
                            </li>
                            <li className="nav-item active text-center HeadText">
                                <Link to='/contact'>
                                    <p className="nav-link" id="header">Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
                </nav>
            </div>
        )
    }
}

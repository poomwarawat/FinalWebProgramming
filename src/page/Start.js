import React, { Component } from 'react'
import Started from '../component/Start'
import Feed from '../page/Feed'

export default class Start extends Component {
    renderPage = () =>{
        if(localStorage.getItem('email')){
            return(
                <Feed></Feed>
            )
        }else{
            return(
                <Started></Started>
            )
        }
    }
    render() {
        return (
            <div className="header">
                {
                    this.renderPage()
                }
            </div>
        )
    }
}

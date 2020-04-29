import React, { Component } from 'react'

export default class PhotoUpload extends Component {    
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.pictures.map((picture, index) => {
                        return(
                            <div key={index} className="col-sm-3 col-3 p-2">                                
                                <img className="w-100" src={URL.createObjectURL(picture)}/>
                            </div>
                        )
                    })}                    
                </div>
            </div>
        )
    }
}

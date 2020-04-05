import React, { Component } from 'react'

export default class PicSlide extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="runimage">
                            <img src="http://i.huffpost.com/gen/1390376/thumbs/o-MORNING-RUN-facebook.jpg" alt=""></img>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="runimage">
                            <img src="http://s3.amazonaws.com/nikeinc/assets/6267/WE_RUN_ROME_1_original.JPG?1325266874" alt=""></img>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
        )
    }
}

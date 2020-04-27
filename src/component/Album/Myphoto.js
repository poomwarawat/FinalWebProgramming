import Nevigator from '../Nevigator'
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";


export default function Myphoto() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

        return (
            <div className="row">
                <div className="col-sm-3 col-12">
                    <Nevigator></Nevigator>
                </div>
                <div className="col-sm-8 col-12">
                        <div className="cover">
                            <img className="coverimg" src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg" alt="Cinque Terre" width="1000" height="300"/>
                            <div className="bottomleft">
                                {/* renderpic function */}
                            </div>
                        </div>
                    <div className="container mt-4">
                        <h1 className ="p_text">Album Name</h1>
                        <div className="row p_picbox ">
                            <div className="col-sm-4 col-12 p_pic">
                                <img src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"/>
                            </div>
                            <div className="col-sm-4 col-12 p_pic">
                                <img src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"/>
                            </div>
                            <div className="col-sm-4 col-12 p_pic">
                                <img src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"/>
                            </div>
                            <div className="col-sm-4 col-12 p_pic">
                                <img src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"/>
                            </div>
                            <div className="col-sm-4 col-12 p_pic">
                                <img src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"/>
                            </div>
                            <div className="col-sm-4 col-12 p_pic">
                                <img src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


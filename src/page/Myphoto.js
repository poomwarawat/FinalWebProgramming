import React, { Component } from 'react'

export default class Myphoto extends Component {
    render() {
        return (
        <div>
          <div className="p_Blaumbg">
            <div className="row p_photo-page">
                <div className="col-sm-3 col-12">
                    {/* this is sideNavbar */}
                </div>
                <div className="col-sm-8 col-12">
                    <div className="cover">
                        <img className="coverimg" src="http://www.thailandoutdoor.com/wp-content/uploads/12443704_10207970802445350_1538187090_o.jpg" alt="Cinque Terre" width="1000" height="300"/>
                        {/* <div className="bottomleft">
                            {this.renderPic()}
                         </div> */}
                         
                    </div>
                    <div className="p_myalbum-body">
                    <h2 className="p_myalbum-text">Album Name</h2>
                    <div className="p_list-myphoto">
                            <div className="row">
                                    <div className="col-sm-3 col-12">
                                        <div className="p_myphoto">  
                                                <img src="https://simg.kapook.com/o/photo/129/kapook_world-128204.jpg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-12">
                                        <div className="p_myphoto">  
                                                <img src="https://simg.kapook.com/o/photo/129/kapook_world-128204.jpg" alt=""></img>
                                        </div>
                                    </div>  
                                    <div className="col-sm-3 col-12">
                                        <div className="p_myphoto">  
                                                <img src="https://simg.kapook.com/o/photo/129/kapook_world-128204.jpg" alt=""></img>
                                        </div>
                                    </div>  
                                    <div className="col-sm-3 col-12">
                                        <div className="p_myphoto">  
                                                <img src="https://simg.kapook.com/o/photo/129/kapook_world-128204.jpg" alt=""></img>
                                        </div>
                                    </div>  
                                    <div className="col-sm-3 col-12">
                                        <div className="p_myphoto">  
                                                <img src="https://simg.kapook.com/o/photo/129/kapook_world-128204.jpg" alt=""></img>
                                        </div>
                                    </div>  
                                    <div className="col-sm-3 col-12">
                                        <div className="p_myphoto">  
                                                <img src="https://simg.kapook.com/o/photo/129/kapook_world-128204.jpg" alt=""></img>
                                        </div>
                                    </div>                                                                                                  
                            </div>                                              
                    </div>
                    </div>
                    
                </div>
            </div>
          </div>
           
        </div>
        )
    }
}
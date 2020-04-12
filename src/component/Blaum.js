import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Blaum extends Component {
    render() {
        return (
        <div>
            
            <div className="p_Blaumbg">
            <div className="row p_album-page">
                <div className="col-sm-3 col-12">
                    {/* this is sideNavbar */}
                </div>
                <div className="col-sm-8 col-12">
                    <div className="cover">
                        <img className="coverimg" src="https://i.pinimg.com/originals/a6/1b/10/a61b1060e0e5c1fbc427bf3f57889516.jpg" alt="Cinque Terre" width="1000" height="300"/>
                        {/* <div className="bottomleft">
                            {this.renderPic()}
                         </div> */}
                         
                    </div>
                    <div className="p_myalbum-body">
                        <h2 className="p_myalbum-head">My Album</h2>
                    <div className="p_list-myalbum">
                            <div className="row">
                                    <div className="col-sm-4 col-12">
                                        <div className="p_myalbum">
                                            <Link to='/Myalbum/Myphoto'>    
                                                <img src="https://img.tnews.co.th/userfiles/images/%E0%B9%83%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87(8).jpg" alt=""></img>
                                                <span className="p_album-text">Album Name</span>
                                            </Link>
                                        </div>
                                    </div>      
                                    <div className="col-sm-4 col-12">
                                        <div className="p_myalbum">
                                            <Link to='/Myalbum/Myphoto'>    
                                                <img src="https://img.tnews.co.th/userfiles/images/%E0%B9%83%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87(8).jpg" alt=""></img>
                                                <span className="p_album-text">Album Name</span>
                                            </Link>
                                        </div>
                                    </div> 
                                    <div className="col-sm-4 col-12">
                                        <div className="p_myalbum">
                                            <Link to='/Myalbum/Myphoto'>    
                                                <img src="https://img.tnews.co.th/userfiles/images/%E0%B9%83%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87(8).jpg" alt=""></img>
                                                <span className="p_album-text">Album Name</span>
                                            </Link>
                                        </div>
                                    </div> 
                                    <div className="col-sm-4 col-12">
                                        <div className="p_myalbum">
                                            <Link to='/Myalbum/Myphoto'>    
                                                <img src="https://img.tnews.co.th/userfiles/images/%E0%B9%83%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87(8).jpg" alt=""></img>
                                                <span className="p_album-text">Album Name</span>
                                            </Link>
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
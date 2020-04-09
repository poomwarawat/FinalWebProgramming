import React, { Component } from 'react'

export default class UploadPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : this.props.data,
            display1 : "",
            display2 : "none",
          
            
        }
    }
   
    componentWillMount(){
        if(this.state.data){
            this.setState({
                display1 : "",
                display2 : "none"
            })
        }else{
            this.setState({
                display1 : "none",
                display2 : ""
            })
        }
    }
    render() {
        const none = {
            display : this.state.display1
            
        }
        const show = {
            display : this.state.display2
        }
        return (
            <div>
                <div style={none} id={this.state.data.id} className="container">
                    <div className="status-box">
                        <div className="media container mt-4">
                        <div className="media-body">
                           <div className="row mt-4">
                               <div className="col-sm-1 col-12">
                                    <div className="p_profile_pic">                       
                                        <img src={require('../pic/default-user.png')} />
                                    </div>
                               </div>
                               <div className="col-sm-10 col-12">
                                        <h5 className="mt-3">{this.state.data.name + " " + this.state.data.lastname}</h5>   
                               </div>   
                               <div className="col-sm-1 col-12">
                                   
                               <div class="dropdown">
                                <a  type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-h"></i></a>
                                    <div class="dropdown-menu dropdown-primary">
                                    <a class="dropdown-item" href="#"><i class="fa fa-trash"></i>&nbsp;&nbsp; Delete</a>
                                    </div>
                                </div>
                               </div>                           
                               <div className="col-sm-12 col-12">
                                        <p className="mt-3">{this.state.data.data}</p> 
                               </div>                                                     
                           </div>
                            
                        </div>
                        </div>
                        <div className="grap">
                            <div className="row">
                                    <div className="col-sm-2 col-12">
                                        <button className="btn btn-light w-100 btn-like"><i class="fa fa-heart-o"></i> Like</button>
                                    </div>
                                    <div className="col-sm-3 col-12">
                                        <button className="btn btn-light w-100 btn-like"><i class="fa fa-comment-o"></i> Comment</button>
                                    </div>
                                    <div className="col-sm-8 col-12">
                                        
                                    </div>
                                    
                            </div>
                        </div>
                       
                        
                        <div className="row container">
                            <div className="col-sm-10 col-12">
                                <input className="form-control mt-2" placeholder="Enter your comment"/>
                            </div>
                            <div className="col-sm-2 col-12">
                                <button className="btn btn-primary mt-2">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={show}>
                    <p>Start your first post!!</p>
                </div>
            </div>
        )
    }
}

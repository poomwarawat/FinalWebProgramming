import React, { Component } from 'react'
import API from '../API/API'

export default class CommentBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        let Data = new FormData();
        Data.append('userID', this.props.userID)
        API({
            method: "POST",
            url : '/getcomment.php',
            data : Data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(res => {
            if(res.data == "none"){
                this.setState({
                    data : []
                })
            }
            else{
                this.setState({
                    data : this.state.data.concat(res.data)
                })
            }
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map(datas =>{
                        return(
                            <div key={datas.id}>
                                <div className="row container mt-3">
                                    <div className="col-sm-1 col-2">
                                        <img className="comment-picture" width="50px" height="50px" src={datas.url} />
                                    </div>
                                    <div className="col-sm-8 col-9 mt-3 ml-3">
                                        {datas.data}
                                    </div>
                                </div>  
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

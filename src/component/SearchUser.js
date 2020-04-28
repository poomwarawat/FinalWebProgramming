import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import API from "../API/API";
export default class SearchUser extends Component {
  handelOnChange = (e) => {    
    let data = new FormData();    
    data.append("data", e.target.value);
    if(e.target.value !== ""){        
        API.post("/user-search", data).then((res) => {
            console.log(res.data.length)
            this.props.handelSearch(res.data);        
        });  
    }else{
        this.props.handelSearch("")
    }
      
  };

  render() {
    return (
      <div>
        <InputGroup>
          <Input placeholder="firstname or lastname" onChange={this.handelOnChange} />
          <InputGroupAddon addonType="append">
            <InputGroupText>Search</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

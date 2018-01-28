import React,{ Component } from 'react';
import './DropdownList.scss';
import User from "../User/User";
const R  = require("ramda")
export default class DropdownList extends React.Component{

  constructor (props){
    super(props);
  }
  _onClick(ev){
  }
  render(){
    console.log("PROPS",this.props)
    return (
        <div className = "dropdown-list">
        {
          this.props.users
          .filter((u) => u.login.indexOf(this.props.filter.trim())>=0)
          .map((user,index)=> {
            return (
              <div 
                key = {`dropdown-list-item-${index+1}`} 
                className = "dropdown-list-item"
                onClick = {this.props.onItemSelect.bind(null,user)}
              >
              <User {...user}/>
              <div className = "dropdown-list-item-floor">{`· ${user.homeFloor} этаж`}</div>
              </div>
              ) 
          })
        }
        </div>
    )
  }
}
import React,{ Component } from 'react';
import './Dropdown.scss';
import User from "../User/User";
import DropdownList from "../DropdownList/DropdownList";
import {InputGroup,FormControl} from 'react-bootstrap';
export default class Dropdown extends React.Component{

  constructor (props){
    super(props);
    this.state = {
      showList:true,
      value:""
    }
  }
  _onChange(ev){
    let val = ev.target.value;
    this.setState({value:val})
  }
  _onFocus(){
    this.setState({showList:true})
  }
  _onBlur(){
    this.setState({showList:false})   
  }
  _setVal(val){
    this.setState({value:val})
  }
  _onSelect(user){
    this.setState({value:"", showList:false})
    this.props.onItemSelect(user)
  }
  render(){
    return (
      <InputGroup>
        <FormControl 
          placeholder = {`Например ${this.props.users[0].login}`} 
          className = "dropdown-input" 
          type="text" 
          value = {this.state.value}
          onFocus = {this._onFocus.bind(this)}
          //onBlur = {this._onBlur.bind(this)}
          onChange = {this._onChange.bind(this)}
        /> 
        {this.state.showList? 
        <DropdownList 
          users = {this.props.users}
          filter = {this.state.value}
          onItemSelect = {this._onSelect.bind(this)}/>          
        :null}
      </InputGroup>
    )
  }
}
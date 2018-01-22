import React,{ Component } from 'react';
import './NavigationIcon.scss';
import edit from './../../assets/edit.svg';
import arrowback from './../../assets/arrowback.svg';
import arrowfor from './../../assets/arrowfor.svg';
export default class NavigationIcon extends React.Component{

  constructor (props){
    super(props);
    this.icons = {
    	"edit":edit,
    	"forward":arrowfor,
    	"backward":arrowback
    }
  }
  render(){
    return (<div
      className =  {`navigation-icon ${this.props.type}`}
      onClick = {this.props.onClick}>
      <img src = {this.icons[this.props.type]}></img>
    </div>)
  }
}
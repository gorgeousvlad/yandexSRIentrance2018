import React,{ Component } from 'react';
import './NavigationIcon.scss';
export default class NavigationIcon extends React.Component{

  constructor (props){
    super(props);
  }
  render(){
    return (<div
      className =  {`navigation-icon ${this.props.type}`}
      onClick = {this.props.onClick}>
    </div>)
  }
}
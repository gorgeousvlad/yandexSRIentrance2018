import React,{ Component } from 'react';
import './Button.scss';
export default class Button extends React.Component{

  constructor (props){
    super(props);
  }
  render(){
    return (<div
      className =  {`button ${this.props.type} ${this.props.curState}`}
      onClick = {this.props.onClick}>
    {this.props.text}
    </div>)
  }
}
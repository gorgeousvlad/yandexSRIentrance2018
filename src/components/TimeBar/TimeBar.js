import React,{ Component } from 'react';
import './TimeBar.scss';
import Curtime from "../Curtime/Curtime";
const R = require('ramda');
export default class TimeBar extends React.Component{
  constructor (props){
    super(props);
  }
  render(){
  	let cellWidth = 100/this.props.hours,
      hour = new Date().getHours()
    return (
      <div className = "timebar">
      <Curtime {...this.props}/>
      {R.range(0,this.props.hours).map((index)=>{
    	return (
    		<div 
    			key = {`hour-${index}`}
    			className = "hour"
    			style = {{
    				width:`${cellWidth}%`
    			}}
    		>
    			<div className = {`hour-text ${((this.props.init + index) < hour)? "disabled" : ""}`}>
    				{(this.props.init + index === 8)?"8:00":this.props.init + index}
    			</div>
    		</div>
    		)
    })}
      </div>
      )
  }
}
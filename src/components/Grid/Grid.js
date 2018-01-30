import React,{ Component } from 'react';
import './Grid.scss';
const R = require('ramda');
export default function Grid(props){
  let cellWidth = 100/props.hours
  return (
    <div className = "grid">
    {R.range(0,props.hours).map((index)=>{
    	return (
    		<div 
    			key = {`cell-grid-${index}`}
    			className = "cell"
    			style = {{
    				width:`${cellWidth}%`
    			}}
    		>
    		</div>
    		)
    })}
    </div>
    )
}
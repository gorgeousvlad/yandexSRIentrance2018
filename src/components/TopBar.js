import React, { Component } from 'react';
import Calendar from './Calendar/Calendar';
import TimeBar from './TimeBar/TimeBar';
export default class TopBar extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
		<div className="topbar">
			<div className = 'calendar-wrapper'>
			<Calendar/>
			</div>
			<div className = 'timebar-wrapper'>
			<TimeBar/>
			</div>
        </div>
		);
	}
}
 

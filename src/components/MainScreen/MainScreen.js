import React, { Component } from 'react';
import DateBlock from "../DateBlock/DateBlock";
import TimeBar from "../TimeBar/TimeBar";
import Grid from "../Grid/Grid";
import Diagramme from "../Diagramme/Diagramme";
import DiagrammeRoom from "../DiagrammeRoom/DiagrammeRoom";
import RoomContainer from "../RoomContainer/RoomContainer";
import "./MainScreen.scss";
const R = require("ramda");
export default class MainScreen extends Component{
	static hours = 17;
  static initHour = 8;
	constructor(props){
		super(props);
		this.state = {}
		this.events = 
			R.clone(this.props.events)
			.map((e,index)=>{
			e.dateStart = new Date(e.dateStart);
			e.dateEnd = new Date((e.dateEnd));
			return e
		})
	}
	render(){
		return (
		<div className = "main-container">
			<div className = "left-col">
			<DateBlock 
				date = {this.props.currentDate} 
				onDateChange = {(date)=>console.log("date change",date)}/>
			<RoomContainer 
				hover = {this.props.roomsState.hoveredRoom} 
				allBusy = {this.props.roomsState.allBusy} 
				rooms = {this.props.roomsByFloor}/>
			</div>
			<div className = "main-col">
				<div className = "main-shift">
					<TimeBar hours = {MainScreen.hours} init = {MainScreen.initHour}/>
					<Grid hours = {MainScreen.hours}/>
					<Diagramme 
						date = {this.props.currentDate}
						splitter = {this.props.currentDate}
						events = {this.events}
						roomsByFloor = {this.props.roomsByFloor}
						toCreateEvent = {this.props.toCreateEvent}
						editEvent = {()=>console.log("editEvent")}
						onRoomHover = {this.props.onRoomHover}
						showTooltip = {()=>console.log("showTooltip")}
					/>
				</div>
			</div>
		</div>
		);
	}
}
 

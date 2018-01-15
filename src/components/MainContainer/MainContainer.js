import React, { Component } from 'react';
import Calendar from "../Calendar/Calendar";
import TimeBar from "../TimeBar/TimeBar";
import Grid from "../Grid/Grid";
import Diagramme from "../Diagramme/Diagramme";
import DiagrammeRoom from "../DiagrammeRoom/DiagrammeRoom";
import "./MainContainer.scss";

let events = [
	{
		id:1,
		dateStart: new Date(Date.parse("January 26, 2011 11:23:00")),
		dateEnd: new Date(Date.parse("January 26, 2011 13:47:00")),
		users:[
		{id:1,login:"Дарт Вейдер", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:2,login:"Чубака", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="}
		],
		title:"Потрем за жизнь",
		room:{id:1,title:"Ржавый Фред",capacity:6,floor:7}
	},
	// {
	// 	id:2,
	// 	dateStart: new Date(Date.parse("January 26, 2011 14:10:00")),
	// 	dateEnd: new Date(Date.parse("January 26, 2011 15:30:00")),
	// 	users:[{id:1,login:"Дарт Вейдер", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="}],
	// 	title:"Встреча одноклассников",
	// 	room:{id:1,title:"Ржавый Фред",capacity:6,floor:7}
	// },
	{
		id:3,
		dateStart: new Date(Date.parse("January 26, 2011 18:00:00")),
		dateEnd: new Date(Date.parse("January 26, 2011 19:00:00")),
		users:[{id:1,login:"Дарт Вейдер", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="}],
		title:"Собрание js",
		room:{id:1,title:"Ржавый Фред",capacity:6,floor:7}
	},
	{
		id:4,
		dateStart: new Date(Date.parse("January 26, 2011 22:00:00")),
		dateEnd: new Date(Date.parse("January 26, 2011 23:58:00")),
		users:[{id:1,login:"Дарт Вейдер", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="}],
		title:"Встреча встреч",
		room:{id:1,title:"Ржавый Фред",capacity:6,floor:7}
	},
	{
		id:5,
		dateStart: new Date(Date.parse("January 26, 2011 08:30:00")),
		dateEnd: new Date(Date.parse("January 26, 2011 10:00:00")),
		users:[{id:1,login:"Дарт Вейдер", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="}],
		title:"Собрание js",
		room:{id:2,title:"Прачечная",capacity:6,floor:7}
	},
	{
		id:6,
		dateStart: new Date(Date.parse("January 26, 2011 16:06:00")),
		dateEnd: new Date(Date.parse("January 26, 2011 20:20:00")),
		users:[{id:1,login:"Дарт Вейдер", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="}],
		title:"Встреча встреч",
		room:{id:2,title:"Прачечная",capacity:6,floor:7}
	},
	{
		id:7,
		dateStart: new Date(Date.parse("January 26, 2011 13:12:00")),
		dateEnd: new Date(Date.parse("January 26, 2011 15:20:00")),
		users:[{id:1,login:"Дарт Вейдер", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="}],
		title:"Встреча встреч",
		room:{id:3,title:"Желтый дом",capacity:6,floor:7}
	}
],
rooms = [
	{
		id: 1,
    title: "Ржавый фред",
    capacity: 10,
    floor: 7
	},
	{
		id: 2,
    title: "Прачечная",
    capacity: 10,
    floor: 7
	},
	{
		id: 3,
    title: "Желтый дом",
    capacity:10,
    floor: 7
	}
],
roomsByFloor = rooms.reduce((acc,cur)=> {
	let floor = cur.floor;
	if (!(floor in acc)){
		acc[floor] = []
	}
	acc[floor].push(cur)
	return acc
},{})

export default class MainContainer extends Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	render(){
		return (
		<div className = "main-container">
			<div className = "left-col">
			<Calendar/>
			</div>
			<div className = "main-col">
				<div className = "main-shift">
					<TimeBar hours = {17} init = {8}/>
					<Grid hours = {17}/>
					<Diagramme 
						events = {events}
						roomsByFloor = {roomsByFloor}
						addEvent = {()=>console.log("addEvent")}
						editEvent = {()=>console.log("editEvent")}
						hoverEvent = {()=>console.log("editEvent")}
						showTooltip = {()=>console.log("showTooltip")}
					/>
				</div>
			</div>
		</div>
		);
	}
}
 

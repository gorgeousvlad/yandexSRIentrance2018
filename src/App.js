import React, { Component } from 'react';
import './styles/mixins.scss';
import './App.scss';
import MainSmart from "./components/MainSmart/MainSmart";
import FormSmart from "./components/FormSmart/FormSmart";

let event = 
	{
		id:1,
		dateStart: new Date(Date.parse("January 30, 2018 11:23:00")),
		dateEnd: new Date(Date.parse("January 30, 2018 13:47:00")),
		users:[
		{id:1,login:"Дарт Вейдер", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:2,login:"Чубака", homerFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="}
		],
		title:"Потрем за жизнь",
		room:{id:1,title:"Ржавый Фред",capacity:6,floor:7}
	},

	users = [
		{id:1,login:"Дарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:2,login:"Чубака", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:3,login:"Карт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:4,login:"Март Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:5,login:"Ларт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:6,login:"Варт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:7,login:"Ыарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:8,login:"Оарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:9,login:"Иарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:10,login:"Фарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:11,login:"Йарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:12,login:"Уарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:13,login:"Еарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		{id:14,login:"Шарт Вейдер", homeFloor:7,avatarUrl:"https://avatars3.githubusercontent.com/u/15365?s=460&v="},
		
	],

room = {
	id: 1,
    title: "Ржавый фред",
    capacity: 10,
    floor: 7
	}

class App extends Component {
  render() {
    return (
    	<div>
    		<MainSmart/>
    		<FormSmart/>
    	</div>
     //<MainScreen/>
     //<FormScreen event = {event} users = {users} room = {room} type = "create"/>
    );
  }
}

export default App;

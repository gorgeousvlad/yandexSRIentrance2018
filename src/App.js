import React, { Component } from 'react';
import './styles/mixins.scss';
import './App.scss';
import MainScreen from "./components/MainScreen/MainScreen";
import FormScreen from "./components/FormScreen/FormScreen";

let event = 
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
	}

class App extends Component {
  render() {
    return (
     //<MainScreen/>
     <FormScreen event = {event} type = "new"/>
    );
  }
}

export default App;

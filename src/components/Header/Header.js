import React, { Component } from 'react';
import Button from '../Button/Button';
import './Header.scss';
import logo from './../../assets/logo.svg'
export default class Header extends Component{
	constructor(props){
		super(props);
	}
	createEventInfo(){
		let now = new Date(),
			then = new Date();
		then.setHours(now.getHours() + 1)
		return {
			dateStart:now,
			dateEnd:then,
			room:null,
			type:"create"
		}
	}
	render(){
		return (
		<header className="header">
          <div className = "logo">
          <img src = {logo}/>
          </div>
          {this.props.needButton?
          <Button type = 'create' text = 'Создать встречу' 
          onClick = {this.props.toCreateEvent.bind(null,this.createEventInfo())}
          	/>:
          null
          }
        </header>
		);
	}
}
 

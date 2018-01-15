import React, { Component } from 'react';
import Button from './Button/Button';
export default class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
		<header className="header">
          <div className = "logo">Яндекс переговорки</div>
          <Button type = 'create' text = 'Создать встречу' onClick = {()=>{}}/>
        </header>
		);
	}
}
 

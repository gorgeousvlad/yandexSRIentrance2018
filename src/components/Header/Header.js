import React, { Component } from 'react';
import Button from '../Button/Button';
import './Header.scss';
import logo from './../../assets/logo.svg'
export default class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
		<header className="header">
          <div className = "logo">
          <img src = {logo}/>
          </div>
          {this.props.needButton?
          <Button type = 'create' text = 'Создать встречу' onClick = {()=>{}}/>:
          null
          }
        </header>
		);
	}
}
 

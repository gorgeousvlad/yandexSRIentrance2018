import React, { Component } from 'react';
import './FormScreen.scss';
import Header from "../Header/Header";
import MainForm from "../MainForm/MainForm";
import NavigationIcon from "../NavigationIcon/NavigationIcon";

export default class FromScreen extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		type:this.props.type
  	}
  }
  render() {
    return (
      <div className="form-screen">
       <Header needButton = {false}/>
       <div className = "form-outer">
       	<div className = "form-title">
       		<span>{`${this.props.type === "new"? "Новая встреча":"Редактирование встречи"}`}</span>
       		<NavigationIcon type = "closeicon"/>
       	</div>
       	<div className = "form-wrapper">
       		<MainForm {...this.props}/>
	      </div>
       </div>
      </div>
    );
  }
}

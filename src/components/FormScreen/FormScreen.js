import React, { Component } from 'react';
import './FormScreen.scss';
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import {Form,FormGroup,Col,Row,FormControl,ControlLabel, InputGroup} from 'react-bootstrap';
import {timeFromRange,getMonthNameDecl,getDecl} from '../../helpers/helpers.js'
import DatePicker from 'react-date-picker';
import calendar from './../../assets/calendar.svg';
export default class FromScreen extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		timepicker:this.props.date,
  		calendar:false
  	}
  	console.log("STATE",this.state)
  }
  getDate(date){
  	return `${date.getDate()} ${getMonthNameDecl(date.getMonth())}, ${date.getFullYear()}`
  }
  _onChange(name,val){
  	this.setState({date:val})
  }
  _toggleCalendar(){
  	this.setState({calendar:!this.state.calendar})
  }
  render() {
    return (
      <div className="form-screen">
       <Header needButton = {false}/>
       <div className = "form-outer">
       	<div className = "form-title">
       		<span>Новая встреча</span>
       		<NavigationIcon type = "closeicon"/>
       	</div>
       	<div className = "form-wrapper">
	       	<Form inline>
	       		<FormGroup controlId = "input-theme">
	       			<Col>
	      				<ControlLabel>Тема</ControlLabel>
	      				<FormControl type="text" placeholder="О чем будете говорить"/>
	    				</Col>
	    			</FormGroup>
	    			<FormGroup>
	    				<Col>
	      				<ControlLabel>Дата</ControlLabel>
	      				<InputGroup>
	      					<FormControl type="text"  readOnly value = {this.getDate(this.state.timepicker)}/>	
	      					<InputGroup.Addon  className = "calendar-icon" onClick = {this._toggleCalendar.bind(this)}><img src = {calendar}/></InputGroup.Addon>
	      					{
	      					this.state.calendar?
	      					<Calendar date = {this.state.timepicker} onDateChange = {()=>{console.log("!!")}}/> :
	      					null
	      					}
	      				</InputGroup>
	    				</Col>
	       		</FormGroup>
	       	</Form>
	      </div>
       </div>
      </div>
    );
  }
}

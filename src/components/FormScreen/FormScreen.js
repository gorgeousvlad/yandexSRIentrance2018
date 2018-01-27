import React, { Component } from 'react';
import './FormScreen.scss';
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import DatePicker from '../DatePicker/DatePicker';
import {Form,FormGroup,Col,Row,FormControl,ControlLabel,InputGroup} from 'react-bootstrap';
import {getHourMinute,timeFromRange,getMonthNameDecl,getDecl} from '../../helpers/helpers.js'
const R = require("ramda");

export default class FromScreen extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		datepicker:this.props.event.dateStart,
  		calendar:false,
  		"beginning":getHourMinute(this.props.event.dateStart),
  		"end":getHourMinute(this.props.event.dateEnd)
  	}
  }
  
  _onChange(name,ev){
  	let val = ev instanceof Date? ev: ev.target.value
  	// if(["end","beginning"].includes(name)){
  		
  	// }
  	this.setState({[name]:val})
  	console.log("S",this.state)
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
       		<span>{`${this.props.type === "new"? "Новая встреча":"Редактирование встречи"}`}</span>
       		<NavigationIcon type = "closeicon"/>
       	</div>
       	<div className = "form-wrapper">
	       	<Form inline>
	       		<FormGroup controlId = "input-theme">
	       			<Col>
	      				<ControlLabel>Тема</ControlLabel>
	      				<FormControl type="text" placeholder="О чем будете говорить"/>
	    				</Col>
	    			</FormGroup>{' '}
	    			<FormGroup controlId = "input-datepicker" id = "form-screen-datepicker">
	    				<Col>
	      				<ControlLabel>Дата</ControlLabel>
	      				<DatePicker
	      					date = {this.state.datepicker}
	      					onDateChange = {R.curry(this._onChange.bind(this))("datepicker")}
	      				/>
	    				</Col>
	       		</FormGroup>{' '}
	       		<FormGroup controlId = "input-beginning">
	       			<Col>
	      				<ControlLabel>Начало</ControlLabel>
	      				<FormControl 
	      					type="text" 
	      					value={this.state.beginning}
	      					//pattern = "[0-2][0-9]:[0-5][0-9]"
	      					onChange = {this._onChange.bind(this,"beginning")}

	      				/>
	    				</Col>
	    			</FormGroup>{' '}
	    			<FormGroup controlId = "input-dash">
	       			<Col>
	      				<ControlLabel>" "</ControlLabel>
	      				<FormControl.Static>-</FormControl.Static>
	    				</Col>
	    			</FormGroup>
	    			<FormGroup controlId = "input-end">
	       			<Col>
	      				<ControlLabel>Конец</ControlLabel>
	      				<FormControl 
	      					type="text" 
	      					//pattern = "[0-2][0-9]:[0-5][0-9]" 
	      					value={this.state.end}
	      					onChange = {this._onChange.bind(this,"end")}
	      				/>
	    				</Col>
	    			</FormGroup>
	       	</Form>
	      </div>
       </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './FormScreen.scss';
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import DatePicker from '../DatePicker/DatePicker';
import {Form,FormGroup,Col,Row,FormControl,ControlLabel,InputGroup} from 'react-bootstrap';
import {timeFromRange,getMonthNameDecl,getDecl} from '../../helpers/helpers.js'
const R = require("ramda");

export default class FromScreen extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		datepicker:this.props.date,
  		calendar:false
  	}
  }
  
  _onChange(name,val){
  	console.log("VAL",name,val)
  	this.setState({[name]:val})
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
	    			</FormGroup>
	    			<FormGroup controlId = "input-datepicker" id = "form-screen-datepicker">
	    				<Col>
	      				<ControlLabel>Дата</ControlLabel>
	      				<DatePicker
	      					date = {this.state.datepicker}
	      					onDateChange = {R.curry(this._onChange.bind(this))("datepicker")}
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

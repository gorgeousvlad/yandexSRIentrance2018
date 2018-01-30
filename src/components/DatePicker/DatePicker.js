import React,{ Component } from 'react';
import './DatePicker.scss';
import Calendar from '../Calendar/Calendar';
import {InputGroup,FormControl} from 'react-bootstrap';
import {getMonthNameDecl} from '../../helpers/helpers.js'
import calendar from './../../assets/calendar.svg';
const R = require("ramda");
export default class DatePicker extends React.Component{

  constructor (props){
    super(props);
    this.state = {"calendar":false}
  }
  getDate(date){
    console.log("DATE",this.props.date)
    return `${date.getDate()} ${getMonthNameDecl(date.getMonth())}, ${date.getFullYear()}`
  }
  toggleCalendar(){
    this.setState({calendar:!this.state.calendar})
  }
  _onDateChange(date){
    console.log('HERE')
    this.setState({"calendar":false})
    this.props.onDateChange(date)
  }
  render(){
    return (
      <InputGroup>
        <FormControl className = "datepicker" type="text"  readOnly value = {this.getDate(this.props.date)}/> 
        <InputGroup.Addon  className = "calendar-icon" onClick = {this.toggleCalendar.bind(this)}><img src = {calendar}/></InputGroup.Addon>
        {this.state.calendar? <Calendar
          {...R.omit("onDateChange",this.props)}
          onDateChange = {this._onDateChange.bind(this)} 
        /> :null}
      </InputGroup>
    )
  }
}
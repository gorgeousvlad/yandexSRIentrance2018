import React,{ Component } from 'react';
import './DatePicker.scss';
import Calendar from '../Calendar/Calendar';
import {InputGroup,FormControl} from 'react-bootstrap';
import {getMonthNameDecl} from '../../helpers/helpers.js'
import calendar from './../../assets/calendar.svg';
export default class DatePicker extends React.Component{

  constructor (props){
    super(props);
    this.state = {"calendar":false}
  }
  getDate(date){
    return `${date.getDate()} ${getMonthNameDecl(date.getMonth())}, ${date.getFullYear()}`
  }
  toggleCalendar(){
    this.setState({calendar:!this.state.calendar})
  }
  render(){
    return (
      <InputGroup>
        <FormControl className = "datepicker" type="text"  readOnly value = {this.getDate(this.props.date)}/> 
        <InputGroup.Addon  className = "calendar-icon" onClick = {this.toggleCalendar.bind(this)}><img src = {calendar}/></InputGroup.Addon>
        {this.state.calendar? <Calendar {...this.props}/> :null}
      </InputGroup>
    )
  }
}
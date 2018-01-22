import React,{ Component } from 'react';
import DateSwitcher from '../DateSwitcher/DateSwitcher';
import Calendar from '../Calendar/Calendar';
import './DateBlock.scss';
export default class DateBlock extends React.Component{

  constructor (props){
    super(props);
    this.state = ({calendar:false})
  }
   _showCalendar(){
    this.setState({calendar:!this.state.calendar})
  }
  render(){
    return (
      <div className = "date-block">
      <DateSwitcher 
        {...this.props}
      	showCalendar = {this._showCalendar.bind(this)}
      />
      {
        this.state.calendar?
        <Calendar 
        	{...this.props}
        />:
        null
      }
      </div>
      )
  }
}
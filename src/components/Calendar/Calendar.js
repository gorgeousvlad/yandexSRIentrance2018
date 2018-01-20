import React,{ Component } from 'react';
import './Calendar.scss';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
export default class Calendar extends React.Component{

  constructor (props){
    super(props);
  }
  render(){
    let prev = new Date(),
        next = new Date(),
        cur = this.props.date;
        prev.setMonth(cur.getMonth() - 1);
        next.setMonth(cur.getMonth() + 1);
    return (
    <div
      className = "calendar-outer">
      <div className = "calendar-inner">
      {
        [prev,cur,next].map((date,index) => {
          return <CalendarMonth
            key = {`calendar-month-${index}`} 
            date = {date}
            onDateChange = {this.props.onDateChange}
          />
        })
      }
      </div>
    </div>
    )
  }
}
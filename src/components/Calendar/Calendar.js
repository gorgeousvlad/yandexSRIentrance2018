import React,{ Component } from 'react';
import './Calendar.scss';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
export default class Calendar extends React.Component{

  constructor (props){
    super(props);
  }
  render(){
    let prev = new Date(this.props.date),
      next = new Date(this.props.date),
      cur = this.props.date,
      curMonth = cur.getMonth();
    prev.setMonth(curMonth - 1);
    next.setMonth(curMonth + 1);
    if (curMonth === 0){
      prev.setFullYear(cur.getFullYear() - 1)
    }
    else if(curMonth === 11){
      next.setFullYear(cur.getFullYear() + 1)
    }

    return (
    <div
      className = "calendar-outer">
      <div className = "calendar-inner">
      {
        [prev,cur,next].map((date,index) => {
          return <CalendarMonth
            key = {`calendar-month-${index}`} 
            date = {date}
            showCur = {index === 1}
            onDateChange = {this.props.onDateChange}
            hideCalendar = {this.props.hideCalendar}
          />
        })
      }
      </div>
    </div>
    )
  }
}
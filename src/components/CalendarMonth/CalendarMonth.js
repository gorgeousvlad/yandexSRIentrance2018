import React,{ Component } from 'react';
import './CalendarMonth.scss';
import {getMonthName, getWeek} from '../../helpers/helpers.js';
const R = require('ramda');
export default class CalendarMonth extends React.Component{

  constructor (props){
    super(props);
  }
  _isCurDay(day){
    let now = new Date();
    return (now.getFullYear() === day.getFullYear() && now.getMonth() === day.getMonth() && now.getDate() === day.getDate())
  }
  render(){
    const MONTH_LEN = 35;
    let cur = this.props.date,
      firstDay = new Date(cur.getFullYear(),cur.getMonth(),1),
      lastDay = new Date(cur.getFullYear(),cur.getMonth() + 1,0),
      days = [],
      offset;

    if (firstDay.getDay()!==1){
      let prevMonLen = new Date(cur.getFullYear(),cur.getMonth(),0).getDate(),
      offset = firstDay.getDay() - 2;
      days = R.range(prevMonLen - offset,prevMonLen + 1)
        .map((d)=> new Date(cur.getFullYear(),cur.getMonth() - 1,d))
    }
    days = [
        ...days,
        ...R.range(1,lastDay.getDate() + 1)
          .map((d)=> new Date(cur.getFullYear(),cur.getMonth(),d))
        ]

    if(lastDay.getDay()){
      offset = MONTH_LEN - (days.length - 1);
      days = [
        ...days,
        ...R.range(MONTH_LEN - offset + 1,MONTH_LEN)
          .map((d,index)=> new Date(cur.getFullYear(),cur.getMonth() + 1,index + 1))
      ]
    }
        
    return (
      <div className = "calendar-month-outer">
        <div className = "calendar-month-title">
          {`${getMonthName(cur.getMonth())} ${cur.getFullYear()}`}
        </div>
        <div className = "calendar-month-week">
        {getWeek().map((day,index)=>{
          return(
            <div
            key = {`calendar-month-week-day-${index+1}`} 
            className = "calendar-month-week-day">{day}</div>
            )
        })}
        </div>
        <div className = "calendar-month-day-outer">
        {
          days.map((day,index)=>{
          return (
            <div 
            key = {`calendar-month-day-${index}`}
            className = {"calendar-month-day" + 
            ` ${day.getMonth() !== cur.getMonth()?"gray":""}`+
            ` ${(day.getDay() === 6 || day.getDay() === 0)? "holiday":""}` +
            ` ${this._isCurDay(day)? "now" : ""}`
            }
            onClick = {this.props.onDateChange.bind(null,day)}
            >{day.getDate()}
            </div>
            )
        })}
        </div>
      </div>
      )
  }
}
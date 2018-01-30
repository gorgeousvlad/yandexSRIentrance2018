import React,{ Component } from 'react';
import './DateSwitcher.scss';
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import {getMonthNameDecl} from '../../helpers/helpers.js'

export default class DateSwitcher extends React.Component{

  constructor (props){
    super(props);
  }
   _isCurDay(day){
    let now = new Date();
    return (now.getFullYear() === day.getFullYear() && now.getMonth() === day.getMonth() && now.getDate() === day.getDate())
  }
  _getLabel(curDay){
    return `${curDay.getDate()} ${getMonthNameDecl(curDay.getMonth()).slice(0,3)}`+
    `${this._isCurDay(curDay)? " · Сегодня":""}`
  }
  _getDate(cur,days){
    let next = new Date(cur);
    next.setDate(cur.getDate() + days)
    return next
  }
  render(){
    let cur = this.props.date,
      prev = this._getDate(cur,-1),
      next = this._getDate(cur,1);
    return (
      <div className = "date-switcher-outer">
      <NavigationIcon 
          type = 'backward' 
          onClick =  {this.props.onDateChange.bind(null,prev)}/>
      <div className = "date-switcher-date" onClick = {this.props.showCalendar}>{this._getLabel(cur)}</div>
      <NavigationIcon 
          type = 'forward' 
          onClick =  {this.props.onDateChange.bind(null,next)}/>
      </div>
      )
  }
}
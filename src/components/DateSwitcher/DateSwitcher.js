import React,{ Component } from 'react';
import './DateSwitcher.scss';
import arrow from './../../assets/arrow.svg';
import {getMonthNameDecl} from '../../helpers/helpers.js'

export default class DateSwitcher extends React.Component{

  constructor (props){
    super(props);
    console.log("SWPROPS",props)
  }
  _getLabel(curDay){
    return `${curDay.getDate()} ${getMonthNameDecl(curDay.getMonth()).slice(0,3)}`+
    `${curDay.getDay() === new Date().getDay()? " · Сегодня":""}`
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
      <div className = "date-switcher-arrow arrow-left" onClick = {this.props.onDateChange.bind(null,prev)}><img src = {arrow}/></div>
      <div className = "date-switcher-date" onClick = {this.props.showCalendar}>{this._getLabel(cur)}</div>
      <div className = "date-switcher-arrow arrow-right" onClick = {this.props.onDateChange.bind(null,next)}><img src = {arrow}/></div>
      </div>
      )
  }
}
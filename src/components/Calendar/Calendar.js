import React,{ Component } from 'react';
import './Calendar.scss';
export default class Calendar extends React.Component{

  constructor (props){
    super(props);
  }
  render(){
    return (
      <div className = "calendar">Календарь</div>
      )
  }
}
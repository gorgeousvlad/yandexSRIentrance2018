import React,{ Component } from 'react';
import './Curtime.scss';
export default class Curtime extends React.Component{
  constructor (props){
    super(props);
    this.state = {curtime:new Date()};
  }
  componentDidMount(){
    this.t = setInterval( () => this.setState({curtime:new Date()}),1000)
  }
  componentWillUnmount(){
    clearInterval(this.t)
  }
  render(){
    let hours = this.state.curtime.getHours(),
      minutes = this.state.curtime.getMinutes(),
      hour = 100/this.props.hours,
      minute = hour/60;

    return (<div 
      className = "curtime"
      style = {{
        left:`${(hours - this.props.init + 1) * hour + minutes * minute}%`
      }}
    >
    {`${hours}:${minutes > 9? minutes:"0"+ minutes}`}
    </div>)
  }
}
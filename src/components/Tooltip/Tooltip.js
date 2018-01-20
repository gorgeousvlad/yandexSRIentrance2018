import React,{ Component } from 'react';
import './Tooltip.scss';
import User from "../User/User";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import {timeFromRange,getMonthNameDecl,getDecl} from '../../helpers/helpers.js'
export default class Tooltip extends Component{
    constructor (props){
    super(props);
    this.state = {visible:false}
    }
    render(){
        let {room, dateStart, dateEnd, users} = this.props,
          len = users.length;
        return (
            <div 
                className = {`tooltip ${this.props.visible?"visible":"hidden"}`}
            >
                <div className ="tooltip-title">{this.props.title}</div>
                <NavigationIcon 
                    type = 'edit' 
                    onClick = {(e) => 
                        {
                            console.log("edit")
                            e.stopPropagation()
                        }}/>
                <div className = "tooltip-event-info">
                    {`${dateStart.getDay()} ${getMonthNameDecl(dateStart.getMonth())} ${timeFromRange(dateStart,dateEnd)} · ${room.title}`}
                </div>
                <div className = "tooltip-user">
                  <User {...users[0]}/>
                  {len > 1?
                    <div className  = "tooltip-user-text">
                    {`и ${len - 1} ${getDecl(['участник','участника','участников'],len - 1)}`}</div>:null}
                </div>
            </div>
            )
    }
}

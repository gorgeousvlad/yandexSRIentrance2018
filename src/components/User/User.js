import React,{ Component } from 'react';
import './User.scss';
import {timeFromRange,getMonthNameDecl} from '../../helpers/helpers.js'
import NavigationIcon from "../NavigationIcon/NavigationIcon";
export default function User(props){
  return (
    <div className = {`user ${props.closable}`}>
        <div className = "user-avatar" style = {{backgroundImage:`url(${props.avatarUrl})`}}></div>
    {props.login}
    {props.closable ? <NavigationIcon type = "closeicon" onClick = {props.onClose}/> : null}
    </div>
    )
}

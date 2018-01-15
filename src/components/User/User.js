import React,{ Component } from 'react';
import './User.scss';
import {timeFromRange,getMonthNameDecl} from '../../helpers/helpers.js'
const R = require('ramda');
export default function User(props){
  console.log("URL",`url${props.avatarUrl}`)
  return (
    <div
        className = "user"
    >
        <div className = "user-avatar" style = {{backgroundImage:`url(${props.avatarUrl})`}}></div>
    {props.login}
    </div>
    )
}

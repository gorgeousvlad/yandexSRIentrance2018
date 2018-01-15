import React,{ Component } from 'react';
import './Diagramme.scss';
const R = require('ramda');
export default class Diagramme extends Component{
   constructor(props){
    super(props)
   }
    render(){
        return (
          <div className = 'diagramme'>
            {this.props.children}
          </div>
        )
    }
}

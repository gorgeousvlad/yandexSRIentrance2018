import React,{ Component } from 'react';
import './DiagrammeCell.scss';
import Tooltip from "../Tooltip/Tooltip";
const R = require('ramda');
export default class DiagrammeCell extends Component{
    constructor (props){
    super(props);
    this.state = {hover:false, showToolTip:false}
    }
    _onMouseEnter(ev){
      this.setState({hover:true})
      this.props.hover()
    }
    _onMouseLeave(ev){
      this.setState({hover:false})
      this.props.unhover()   
    }
    _onClick(ev){
      ev.preventDefault();
      this.setState({showToolTip:!this.state.showToolTip})
    }
    render(){
        return (
            <div
            className = {
              `diagramme-cell ${this.props.type}`+ 
              ` ${this.state.hover?"hover":""}` +
              ` ${this.state.showToolTip?"pressed":""}`+
              ` ${this.props.disabled}`
            }
            style = {{
              width:this.props.width,
              borderLeftColor:this.props.border
            }}
            onMouseLeave = {this._onMouseLeave.bind(this)}
            onMouseEnter = {this._onMouseEnter.bind(this)}
            onClick = {this._onClick.bind(this)}
            >
            {this.props.type === 'empty'? "+":
            <Tooltip 
              {...this.props.eventInfo}
              visible = {this.state.showToolTip}
              disabled = {this.props.disabled}
            />}
            </div>
            )
    }
}

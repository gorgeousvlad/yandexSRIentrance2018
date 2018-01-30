import React,{ Component } from 'react';
import './RoomChoiceBlock.scss';
import {InputGroup,FormControl} from 'react-bootstrap';
import closeicon_white from './../../assets/closeicon_white.svg';
import {getHourMinute} from '../../helpers/helpers.js'
export default class RoomChoiceBlock extends React.Component{

  constructor (props){
    super(props);
  }
  render(){
    console.log("S",this.props.selected)
    return (
      <div className = "room-choice-block">
      {this.props.selected?
        <InputGroup >
          <FormControl  
            type="text"
            className = "room-choice-block-choice"
            readOnly
            value = {`${this.props.selected.time}  ${this.props.selected.title}  ${this.props.selected.floor}  · этаж`}
          /> 
          <InputGroup.Addon  
            className = "room-block-close-icon"
            onClick = {this.props.onClose}
          >
            <img src = {closeicon_white}/>
            </InputGroup.Addon>
        </InputGroup>
      : 
      <InputGroup >
      {this.props.recomendations.map((r,index) => {
        return <FormControl  
            key = {`room-choice-block-rec-${index+1}`}
            className = "room-choice-block-rec"
            type="text"
            readOnly
            value = {`${getHourMinute(r.dateStart)} — ${getHourMinute(r.dateEnd)} ${r.room.title}  ${r.room.floor}  · этаж`}
            onClick = {this.props.onItemSelect.bind(null,r)}
          /> 
      })}
      </InputGroup>
      }
      </div>
    )
  }
}
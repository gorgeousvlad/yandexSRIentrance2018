import React, { Component } from 'react';
import './FormScreen.scss';
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import DatePicker from '../DatePicker/DatePicker';
import Dropdown from "../Dropdown/Dropdown";
import RoomChoiceBlock from "../RoomChoiceBlock/RoomChoiceBlock";
import User from "../User/User";
import MaskedInput from 'react-maskedinput';
import {Form,Row,FormGroup,Col,FormControl,ControlLabel,InputGroup} from 'react-bootstrap';
import {validateTime,getHourMinute,timeFromRange,getMonthNameDecl,getDecl} from '../../helpers/helpers.js'
const R = require("ramda");

export default class FromScreen extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		theme:"",
  		themeValid:false,
  		datepicker:this.props.event.dateStart,
  		datepickerValid:false,
  		calendar:false,
  		beginning:getHourMinute(this.props.event.dateStart),
  		beginningValid:false,
  		end:getHourMinute(this.props.event.dateEnd),
  		endValid:false,
  		selectedUsers:[],
  		selectedUsersValid:false,
  		selectedRoom:this.props.room,
  		selectedRoomValid:false,
  		recomendations :[
  			this.props.event,
  			this.props.event
			]
  	}
  	this.timeMask = {
			'h': {
				validate : (char)=>{
					this._hoursBeg = char 
					return /[0-2]/.test(char) }
			},
			't': {
				validate : (char)=>{
					this._hoursEnd = char 
					return /[0-2]/.test(char) }
			},
			'r': {
				validate :(char)=>{
					return this._hoursBeg < 2? 
					/[0-9]/.test(char):
					/[0-3]/.test(char)
				}
			},
			'm': {
				validate : (char)=>{ return /[0-5]/.test(char) }
			}
		}
  }
 
  _onChange(name,ev){

  	let val = ev instanceof Date? ev: ev.target.value
  	this.setState({[name]:val})
  }
  _toggleCalendar(){
  	this.setState({calendar:!this.state.calendar})
  }
  render() {
    return (
      <div className="form-screen">
       <Header needButton = {false}/>
       <div className = "form-outer">
       	<div className = "form-title">
       		<span>{`${this.props.type === "new"? "Новая встреча":"Редактирование встречи"}`}</span>
       		<NavigationIcon type = "closeicon"/>
       	</div>
       	<div className = "form-wrapper">
	       	<Form>
	       		<div className = "my-row">
			       		<FormGroup controlId = "input-theme" className = "input-theme">
			      				<ControlLabel>Тема</ControlLabel>
			      				<FormControl 
			      					type="text" 
			      					value = {this.state.theme}
			      					onChange = {this._onChange.bind(this,"theme")} 
			      					placeholder="О чем будете говорить"
			      				/>
			    			</FormGroup>
			    			<FormGroup bsSize = "small" controlId = "input-datepicker" id = "form-screen-datepicker" className = "input-date">
			      				<ControlLabel>Дата</ControlLabel>
			      				<DatePicker
			      					date = {this.state.datepicker}
			      					onDateChange = {R.curry(this._onChange.bind(this))("datepicker")}
			      				/>
			      		</FormGroup>
		      		
			       		<FormGroup controlId = "input-beginning" className = "input-time">
			      				<ControlLabel>Начало</ControlLabel>
			      				<MaskedInput 
			      					mask="hr:m1"
			      					formatCharacters={this.timeMask}
			      					placeholderChar = " "
			      					className = "form-control"
			      					type = "text" 
			      					value={this.state.beginning}
			      					onChange = {this._onChange.bind(this,"beginning")} 
			      				/>	
			    			</FormGroup>
			    			<FormGroup controlId = "input-dash" className = "input-dash">
			       			
			      				<ControlLabel>{' '}</ControlLabel>
			      				<FormControl.Static> — </FormControl.Static>
			    			</FormGroup>
			    			<FormGroup controlId = "input-end" className = "input-time">
			      				<ControlLabel>Конец</ControlLabel>
			      				<MaskedInput 
			      					mask="tr:m1"
			      					formatCharacters={this.timeMask}
			      					placeholderChar = " "
			      					className = "form-control"
			      					type = "text" 
			      					value={this.state.end}
			      					onChange = {this._onChange.bind(this,"end")} 
			      				/>		
			    			</FormGroup>
		    		</div>
		    		<div className = "my-row">
			    	<FormGroup controlId = "input-dropdown" className = "input-dropdown">
			      	<ControlLabel>Участники</ControlLabel>
			    		<Dropdown
			    			users = {this.props.users}
			    			onItemSelect = {
			    				((user)=>{
			    					if (!this.state.selectedUsers.map((u)=>u.id).includes(user.id)){
			    						this.setState({"selectedUsers":[...this.state.selectedUsers,user]})
			    							}
			    					}).bind(this)
			    			}
			    		/>
			    		<div className = "dropdown-selected">
			    		{
			    			this.state.selectedUsers.map((user,index)=>{
			    				return(
			    					<User 
			    						key = {`dropdwon-selected-item-${index + 1}`}
			    						closable = "closable" 
			    						onClose = {((id)=>{
			    							this.setState({selectedUsers:this.state.selectedUsers.filter((u)=>u.id !== id)})
			    						}).bind(null,user.id)}
			    						{...user}/>
			    					)
			    			})
			    		}
        			</div>
			      </FormGroup>
			      <FormGroup bsSize = "small" controlId = "input-room" className = "input-room">
      				<ControlLabel>{`${this.state.selectedRoom? "Ваша переговорка":"Рекомендуемые переговорки"}`}</ControlLabel>
      				<RoomChoiceBlock
      					recomendations = {this.state.recomendations} 
      					selected = {
      						this.state.selectedRoom?
	      						Object.assign(
	      							{},
	      							this.state.selectedRoom,
	      							{time:`${this.state.beginning} — ${this.state.end}`}
	      						)
	      					:
	      					this.state.selectedRoom
      					}
      					onClose = {(()=>{
      						this.setState({selectedRoom:null})
      						
      					}).bind(this)}
      					onItemSelect = {((rec)=>{
      						console.log("REC",rec)
      						this.setState(
      							{
      								selectedRoom:rec.room,
      								beginning:getHourMinute(rec.dateStart),
      								end:getHourMinute(rec.dateEnd)
      							}
      						)
      					}).bind(this)}
      				/>
	      		</FormGroup>

		    		</div>
	       	</Form>
	      </div>
       </div>
      </div>
    );
  }
}

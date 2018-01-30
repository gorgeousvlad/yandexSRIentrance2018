import React, { Component } from 'react';
import Header from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
import DatePicker from '../DatePicker/DatePicker';
import Dropdown from "../Dropdown/Dropdown";
import RoomChoiceBlock from "../RoomChoiceBlock/RoomChoiceBlock";
import User from "../User/User";
import ButtonBar from "../ButtonBar/ButtonBar";
import MaskedInput from 'react-maskedinput';
import {Form,Row,FormGroup,Col,FormControl,ControlLabel,InputGroup,HelpBlock} from 'react-bootstrap';
import {validate} from '../../helpers/validate.js'
import {validateTime,getHourMinute,timeFromRange,getMonthNameDecl,getDecl} from '../../helpers/helpers.js'
import './MainForm.scss';
const R = require("ramda");

export default class MainForm extends Component {
  constructor(props){
  	console.log("PORPS",props)
  	super(props)
  	this.state = {
  		type:this.props.type,
  		theme:"",
  		themeValid:true,
  		datepicker:this.props.event.dateStart,
  		datepickerValid:true,
  		calendar:false,
  		beginning:getHourMinute(this.props.event.dateStart),
  		beginningValid:true,
  		end:getHourMinute(this.props.event.dateEnd),
  		endValid:true,
  		selectedUsers:[],
  		selectedUsersValid:true,
  		selectedRoom:this.props.room,
  		selectedRoomValid:true,
  		formValid:true,
  		//for test
  		recomendations :
  			R.clone(this.props.events)
				.map((e,index)=>{
				e.dateStart = new Date(e.dateStart);
				e.dateEnd = new Date((e.dateEnd));
				return e
			})
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
 	_onSubmit(type){
 			switch(type){
	 			case "cancel":{
	 				this.props.cancelEvent()
	 				break
	 			}
	 			case "create":{
	 				let valRes = this.validateForm()
	 				if (!Object.keys(valRes).filter((k)=>!valRes[k]).length){
	 					console.log("COMPOSE",this.composeEvent())
	 					this.props.createEvent(this.composeEvent());
	 					this.props.eventCreated()
	 					break
	 				}

	 				else this.setState(valRes,()=>console.log(this.state))
	 				break;
	 			}
	 			case "delete":{
	 				//back to main
	 				break
	 			}
	 			case "save":{
	 				//back to main
	 				break
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
  validateForm(){
  	return validate(R.clone(this.state));
  }
  composeEvent(){
  	console.log("STATE",this.state)
  	let start = new Date(this.state.datepicker),
  		end = new Date(this.state.datepicker);
  	start.setHours(parseInt(this.state.beginning.slice(0,2)))
  	start.setMinutes(parseInt(this.state.beginning.slice(3,5)))
  	end.setHours(parseInt(this.state.end.slice(0,2)))
  	end.setMinutes(parseInt(this.state.end.slice(3,5)))
  	console.log("SED",start,end)
  	return Object.assign({},
  		{
  		id:Math.max(...this.props.events.map((e)=>e.id)) + 1,
  		dateStart:start,
  		dateEnd:end,
  		users:this.state.selectedUsers,
  		title:this.state.theme,
  		room: this.state.selectedRoom
  		})
  }
  render() {
    return (
   	<Form>
   		<div className = "my-row">
	       		<FormGroup 
	       			controlId = "input-theme" 
	       			className = {`input-theme ${!this.state.themeValid?"fg-error":""}`}>
	      				<ControlLabel>Тема</ControlLabel>
	      				<FormControl 
	      					type="text" 
	      					value = {this.state.theme}
	      					onChange = {this._onChange.bind(this,"theme")} 
	      					placeholder="О чем будете говорить"
	      				/>
	      				<HelpBlock>{!this.state.themeValid?"Встрече нужна тема":""}</HelpBlock>

	    			</FormGroup>
	    			<FormGroup bsSize = "small" controlId = "input-datepicker" id = "form-screen-datepicker" 
	    			className = {`input-date ${!this.state.datepickerValid?"fg-error":""}`}>
	      				<ControlLabel>Дата</ControlLabel>
	      				<DatePicker
	      					date = {this.state.datepicker}
	      					onDateChange = {R.curry(this._onChange.bind(this))("datepicker")}
	      				/>
	      				<HelpBlock>{!this.state.datepickerValid?"Это время уже минуло":""}</HelpBlock>
	      		</FormGroup>
      		
	       		<FormGroup controlId = "input-beginning" 
	    			className = {`input-time ${!this.state.beginningValid?"fg-error":""}`}>
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
	    			<FormGroup controlId = "input-end"
	    			className = {`input-time ${!this.state.endValid?"fg-error":""}`}>
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
	    	<FormGroup controlId = "input-dropdown" 
	    	className = {`input-dropdown ${!this.state.selectedUsersValid?"fg-error":""}`}>
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
				<HelpBlock>{!this.state.selectedUsersValid?"Без людей ничего не состоится":""}</HelpBlock>
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
						this.setState(
							{
								selectedRoom:rec.room,
								beginning:getHourMinute(rec.dateStart),
								end:getHourMinute(rec.dateEnd)
							}
						)
					}).bind(this)}
				/>
	      <HelpBlock>{!this.state.selectedRoomValid?"Нужно выбрать комнату":""}</HelpBlock>
  		</FormGroup>
    </div>
    <div className = "my-row">
   		<ButtonBar 
   			type = {this.props.type}
   			onClick = {this._onSubmit.bind(this)}
   		/>
		</div>
  </Form>
    );
  }
}

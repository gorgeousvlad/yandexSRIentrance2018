import React,{ Component } from 'react';
import './RoomContainer.scss';
import {getCapacity} from '../../helpers/helpers.js'
export default class RoomContainer extends Component{
    constructor (props){
    super(props);
    }
    render(){
      return (
        <div className = "room-container">
         { 
          Object.keys(this.props.rooms)
          .sort()
          .reverse()
          .map((floor,i)=>{
          return (
            <div 
              className = "room-container-stage"
              key = {`rooms-stage-${floor}`}
            >
            <div className = "room-container-stage-label">{`${floor} ЭТАЖ`}</div>
            {
              this.props.rooms[floor].map((room,j) => {
                return (
                  <div 
                  className = {`room-container-room ${this.props.allBusy.includes(room.id)? "busy" : ""}`} 
                  key = {`room-container-room-${floor}-${j}`}
                  >
                    <div 
                      className ={`room-container-title ${room.id === this.props.hover? "hover" : ""}`} 
                    >
                    {room.title}</div>
                    <div className ="room-container-capacity">{getCapacity(room.capacity)}</div>
                  </div>
                  )
              })
            }
            </div>
            
          )})
        }
        </div>
        )
      }
    }

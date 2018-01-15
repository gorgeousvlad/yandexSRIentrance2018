import React,{ Component } from 'react';
import DiagrammeRoom from "../DiagrammeRoom/DiagrammeRoom";
import './Diagramme.scss';
const R = require('ramda');
export default class Diagramme extends Component{
   constructor(props){
    super(props)
   }
    render(){
        return (
          <div className = 'diagramme'>
            {Object.keys(this.props.roomsByFloor)
              .sort()
              .reverse()
              .map((floor,findex)=> {
                return (
                  <div
                  key = {`diagfloor${findex}`} 
                  className = "diagramme-stage">
                  {
                    this.props.roomsByFloor[floor].map((room,rindex) => {
                      return <DiagrammeRoom 
                        key = {`diagroom${rindex}`}
                        room = "room" 
                        events = {this.props.events.filter((e)=>e.room.id === room.id)} 
                        hours = {17}
                      />
                    })
                  }
                  </div>
                    )
            })}
          </div>
        )
    }
}

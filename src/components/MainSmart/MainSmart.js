import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../Header/Header";
import {setHoveredRoom,toCreateEvent,setDate} from "../../actions/actions"
import MainScreen from "../MainScreen/MainScreen"
import {getDateKey,eventsByDate} from '../../helpers/helpers.js'



let mainsmart  = (props) => {
    return Object.keys(props.handlingEvent).length?
    null
    :(
      <div className="main-screen">
       <Header needButton = {true} 
       toCreateEvent = {props.toCreateEvent}/>
       <MainScreen {...props}/>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    roomsState: state.roomsState,
    handlingEvent: state.handlingEvent,
    rooms:state.rooms,
    roomsByFloor:state.roomsByFloor,
    currentDate: state.currentDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRoomHover: (id) => {
      dispatch(setHoveredRoom(id))
    },
    toCreateEvent: (event)=>{
      dispatch(toCreateEvent(event))
    },
    setDate: (date)=>{
      dispatch(setDate(date))
    }
  }
}

const MainSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(mainsmart)

export default MainSmart;

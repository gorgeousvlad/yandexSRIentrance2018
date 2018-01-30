import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../Header/Header";
import {setHoveredRoom,toCreateEvent} from "../../actions/actions"
import MainScreen from "../MainScreen/MainScreen"


let mainsmart  = (props) => {
    return Object.keys(props.handlingEvent).length?
    null
    :(
      <div className="main-screen">
       <Header needButton = {true}/>
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
    }
  }
}

const MainSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(mainsmart)

export default MainSmart;

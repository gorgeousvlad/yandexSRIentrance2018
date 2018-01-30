import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../Header/Header";
import {setHoveredRoom} from "../../actions/actions"
import MainScreen from "../MainScreen/MainScreen"


let mainsmart  = (props) => {
    return (
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
      console.log('dispatch',id)
      dispatch(setHoveredRoom(id))
    }
  }
}

const MainSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(mainsmart)

export default MainSmart;

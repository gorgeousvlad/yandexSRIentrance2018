import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from "../Header/Header";
import FormScreen from "../FormScreen/FormScreen";
import {cancelEvent,createEvent,eventCreated} from "../../actions/actions"
const R = require("ramda")

let formsmart  = (props) => {
    return !Object.keys(props.handlingEvent).length?
    null
    :
    (
      <div className="main-screen">
       <FormScreen {...props}/>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    type:state.handlingEvent.type,
    room:state.handlingEvent.room,
    event:Object.assign({},R.pick(["dateStart","dateEnd"],state.handlingEvent)),
    handlingEvent: state.handlingEvent,
    users: state.users,
    rooms: state.rooms,
    events:state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancelEvent: () => {
      dispatch(cancelEvent())
    },
    createEvent: (event) => {
      dispatch(createEvent(event))
    },
    eventCreated: () => {
      dispatch(eventCreated())
    },
  }
}

const FormSmart = connect(
  mapStateToProps,
  mapDispatchToProps
)(formsmart)

export default FormSmart;

import { combineReducers } from 'redux'
import {
  SET_HOVERED_ROOM, 
  CREATE_EVENT,
  TO_CREATE_EVENT,
  TO_EDIT_EVENT,
  SET_ALL_BUSY,
  REMOVE_ALL_BUSY,
  CANCEL_EVENT
} from '../actions/actions'

function roomsState(state = {
	hoveredRoom:"",
	allBusy:[]
}, action) {
  switch (action.type) {
  case SET_HOVERED_ROOM:
    return Object.assign({},state,{hoveredRoom:action.id})
  case SET_ALL_BUSY:
    return Object.assign({},state, {allBusy:[...state.allBusy,action.id]})
  case REMOVE_ALL_BUSY:
    return Object.assign({},state, {allBusy:state.allBusy.filter((id_)=>action.id===id_)})
  default:
    return state
  }
}

function handlingEvent(state = {}, action) {
  switch (action.type) {
  case CANCEL_EVENT:
  	return {}
  case TO_CREATE_EVENT:
  case TO_EDIT_EVENT:
    return action.eventInfo
  default:
    return state
  }
}

function events(state = {}, action) {
  switch (action.type) {
  case CREATE_EVENT:
    return Object.assign({},state,action.event)
  default:
    return state
  }
}

function rooms(state = {}, action) {
  switch (action.type) {
  default:
    return state
  }
}

function users(state = {}, action) {
  switch (action.type) {
  default:
    return state
  }
}

function roomsByFloor(state = {}, action) {
  switch (action.type) {
  default:
    return state
  }
}

function currentDate(state = new Date(), action) {
  switch (action.type) {
  default:
    return state
  }
}

const rootReducer = combineReducers({
  roomsState,
  events,
  handlingEvent,
  rooms,
  users,
  currentDate,
  roomsByFloor
})

export default rootReducer
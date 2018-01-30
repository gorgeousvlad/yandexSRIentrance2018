export const SET_HOVERED_ROOM = 'SET_HOVERED_ROOM'
export const SET_ALL_BUSY = 'SET_ALL_BUSY'
export const REMOVE_ALL_BUSY = 'REMOVE_ALL_BUSY'
export const GO_TO_CREATE_FORM = 'GO_TO_CREATE_FORM'
export const REQUEST_EVENT_CREATION = 'REQUEST_EVENT_CREATION'
export const CREATE_EVENT = 'CREATE_EVENT'
export const CANCEL_EVENT_CREATION = 'CANCEL_EVENT_CREATION'
export const SWITCH_TO_EVENT_CREATION = 'SWITCH_TO_EVENT_CREATION'
export const SWITCH_TO_EVENT_EDIT = 'SWITCH_TO_EVENT_EDIT'



export function setHoveredRoom(id) {
  return {
    type: SET_HOVERED_ROOM,
    id
  }
}

export function setAllBusy(id) {
  return {
    type: SET_HOVERED_ROOM,
    id
  }
}

export function removeAllBusy(id) {
  return {
    type: REMOVE_ALL_BUSY,
    id
  }
}

export function switchToEventCreation(eventInfo) {
  return {
    type: SWITCH_TO_EVENT_CREATION,
    eventInfo
  }
}

export function switchToEventEdit(eventInfo) {
  return {
    type: SWITCH_TO_EVENT_EDIT,
    eventInfo
  }
}

export function createEvent(event) {
  return {
    type: CREATE_EVENT,
    event
  }
}


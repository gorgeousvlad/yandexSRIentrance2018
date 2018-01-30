export const SET_HOVERED_ROOM = 'SET_HOVERED_ROOM'
export const SET_ALL_BUSY = 'SET_ALL_BUSY'
export const REMOVE_ALL_BUSY = 'REMOVE_ALL_BUSY'
export const REQUEST_EVENT_CREATION = 'REQUEST_EVENT_CREATION'
export const CREATE_EVENT = 'CREATE_EVENT'
export const TO_CREATE_EVENT = 'TO_CREATE_EVENT'
export const TO_EDIT_EVENT = 'TO_EDIT_EVENT'
export const CANCEL_EVENT = 'CANCEL_EVENT'



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

export function toCreateEvent(eventInfo) {
  return {
    type: TO_CREATE_EVENT,
    eventInfo
  }
}

export function toEditEvent(eventInfo) {
  return {
    type: TO_EDIT_EVENT,
    eventInfo
  }
}

export function cancelEvent() {
  return {
    type: CANCEL_EVENT
  }
}
export function createEvent(event) {
  return {
    type: CREATE_EVENT,
    event
  }
}


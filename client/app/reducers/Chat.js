import { combineReducers } from 'redux'
import {
  ADD_MESSAGE,
  CREATE_MESSAGE_LIST,
  TOGGLE_DISPLAY_MESSAGE,
  UPDATE_MESSAGE,
  DELETE_MESSAGE
} from '../constants/chat'

export const chatInitialState = [{"id":2,"text":"message2"},{"id":1,"text":"message1"}]

const toggleMessage = (id, message) => {
  if (id === message.id) {
    message.displayState = !message.displayState
  }
  return message
}

const updateMessage = (newMessage, message) => {
  if (message.id === newMessage.id) {
    message.displayState = !message.displayState
  }
  return message
}

// const deleteMessage = (id) => {
// }

const chat = (state = '', action) => {
  switch (action.type) {
    case CREATE_MESSAGE_LIST:
      return action.messages.map((message) => {
        message['displayState'] = true
        return message
      })
    case ADD_MESSAGE:
      const message = action.message
      message['displayState'] = true
      return [ ...state, message ]
    case TOGGLE_DISPLAY_MESSAGE:
      return state.map((message) => toggleMessage(action.id, message))
    case UPDATE_MESSAGE:
      return state.map((message) => updateMessage(action.message, message))
    case DELETE_MESSAGE:
      // deleteMessage(action.id)
      return state.filter((message, index) => action.id !== message.id);
    default:
      return state
  }
}

export default chat

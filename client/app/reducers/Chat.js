import { combineReducers } from 'redux'
import * as Constants from '../constants/chat'

export const chatInitialState = [{"id":2,"text":"message2"},{"id":1,"text":"message1"}]

const chat = (state = '', action) => {
  switch (action.type) {
    case Constants.CREATE_MESSAGE_LIST:
      return action.messages.map((message) => {
        message['displayState'] = true
        return message
      })
    case Constants.ADD_MESSAGE:
      const message = action.message
      message['displayState'] = true
      return [ ...state, message ]
    case Constants.TOGGLE_DISPLAY_MESSAGE:
      const id = action.id
      return state.map((message) => {
        if (id === message.id) { message.displayState = !message.displayState }
        return message
      })
    default:
      return state
  }
}

export default chat

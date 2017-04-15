import * as Constants from '../constants/chat'

export const addMessage = (message) => ({
  type: Constants.ADD_MESSAGE,
  message,   // keyを省略できる
})
// ↑と同じイメージ
// var addMessage = function(message) {
//   return ({type: ADD_MESSAGE, message: message})
// }

export const createMessageList = (messages) => ({
  type: Constants.CREATE_MESSAGE_LIST,
  messages,
})

export const toggleDisplayState = (id) => ({
  type: Constants.TOGGLE_DISPLAY_MESSAGE,
  id,
})

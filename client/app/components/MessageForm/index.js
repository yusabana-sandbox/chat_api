import React, { Component } from 'react'

class MessageForm extends Component {
  render() {
    return (
      <div>
        <textarea rows="4" cols="40" />
        <input type="button" value="登録" />
      </div>
    )
  }
}

export default MessageForm

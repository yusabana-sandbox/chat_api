import React, { Component } from 'react'
import $ from 'jquery'

class MessageForm extends Component {
  onSubmit() {
    const { actions } = this.props
    $.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: { text: this.textMessage.value }
      },
      success: ((data) => actions.addMessage(data))
    })
  }

  onCancel() {
    const { message, actions } = this.props
    actions.toggleDisplayState(message.id)
  }

  render() {
    const { message } = this.props
    return (
      <div>
        <textarea cols="40" rows="4" defaultValue={message ? message.text : ''}  ref={(input) => { this.textMessage = input }} />
        <input type="button" value="登録" onClick={this.onSubmit.bind(this)} />
        <input type="button" value="キャンセル" onClick={this.onCancel.bind(this)} />
      </div>
    )
  }
}

export default MessageForm

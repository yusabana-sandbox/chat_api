import React, { Component } from 'react'
import $ from 'jquery'

class MessageForm extends Component {
  submit() {
  }

  onCreate() {
    const { actions } = this.props
    $.ajax({
      type: 'POST',
      url: '/api/messages',
      data: {
        message: {text: this.textMessage.value}
      },
      success: ((data) => actions.addMessage(data))
    })
  }

  onUpdate() {
    const { actions, message } = this.props
    message.text = this.textMessage.value

    $.ajax({
      type: 'PATCH',
      url: `/api/messages/${message.id}`,
      data: {
        message: {text: this.textMessage.value}
      },
      success: ((data) => actions.updateMessage(data))
    })
  }

  render() {
    const { message, onCancelClick } = this.props
    const cancelButton = message ? <input type='button' value='キャンセル' onClick={onCancelClick} /> : null
    return (
      <div>
        <textarea rows="4" cols="40" ref={(input) => { this.textMessage = input }} defaultValue={message ? message.text : ''} />
        {cancelButton}
        <input type="button" value={message ? '更新' : '登録'} onClick={message ? this.onUpdate.bind(this) : this.onCreate.bind(this)} />
      </div>
    )
  }
}

export default MessageForm

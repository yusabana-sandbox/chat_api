import React, { Component } from 'react'

class Message extends Component {
  changeMessageView() {
    const { message, actions } = this.props
    actions.toggleDisplayState(message.id)
  }

  render() {
    const { message } = this.props
    return (
      <div onClick={this.changeMessageView.bind(this)}>
        {message.text}
      </div>
    )
  }
}

export default Message

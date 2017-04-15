import React, { Component } from 'react'  // react component のクラスを作る場合は { Component } が必要
import Message from '../Message'
import MessageForm from '../MessageForm'

import $ from 'jquery'

class MessageList extends Component {
  componentDidMount() {
    const { actions } = this.props

    $.ajax({
      type: 'GET',
      url: '/api/messages',
      data: {},
      success: (data) => actions.createMessageList(data),
    })
  }

  renderMessage(actions, message) {
    return (
      message.displayState ? <Message key={message.id} message={message} actions={actions} /> : <MessageForm actions={actions} message={message} />
    )
  }

  render() {
    const { actions, messages } = this.props
    return (
      <div>
       {messages.map((message) => this.renderMessage(actions, message))}
      </div>
    )
  }
}

// const MessageList = ({messages}) => {
//   return (
//     <div>
//       {messages.map((message) => <Message key={message.id} text={message.text} />)}
//     </div>
//   )
// }

export default MessageList
